/* Uses the retained MyFoodTruck database. Only a public publishable key belongs here. */
(() => {
  'use strict';
  const $ = (id) => document.getElementById(id);
  if (!window.supabase) { const status = $('search-status') || $('auth-status'); if (status) status.textContent = 'The connection could not load. Please refresh and try again.'; return; }
  const db = window.supabase.createClient('https://vyjquxjxjywhrtihpzwk.supabase.co', 'sb_publishable_dnU2ePpleMBcl5Qt3kJriw_AFTeDa1w');
  let user = null, activePlace = null, signupEmail = '', searchVersion = 0;
  const el = (tag, text, cls) => { const n = document.createElement(tag); if (text) n.textContent = text; if (cls) n.className = cls; return n; };
  const safeLink = (raw) => { try { const u = new URL(raw); return ['http:', 'https:'].includes(u.protocol) ? u.href : null; } catch { return null; } };
  const message = (id, text) => { if ($(id)) $(id).textContent = text; };
  const busy = (form, state) => form.querySelectorAll('button').forEach(b => b.disabled = state);
  const errorText = (error) => error?.code === '23505' ? 'This listing or review already exists. Open your existing listing to edit it.' : 'We could not save this. Please check your connection and sign-in, then try again. Your entries are still here.';
  const text = (tag, value, parent, cls) => { const n = el(tag, value, cls); parent.append(n); return n; };
  function renderEmpty(title, body, parent) { const n=el('div', '', 'empty'); text('h3',title,n); text('p',body,n); const a=text('a','List your business →',n);a.href='list-business.html';parent.append(n); }

  async function search(event) {
    event?.preventDefault();
    if (!$('search-form').reportValidity()) return;
    const zip=$('zip').value.trim();
    if (!/^\d{5}$/.test(zip)) return;
    const version=++searchVersion;
    message('search-status', 'Finding local bites…'); $('results').replaceChildren(); busy($('search-form'),true);
    try {
      let q=db.from('streetbite_listings').select('id,name,kind,cuisine,zip,city,address,description,website,user_id').eq('status','published').eq('zip',zip).order('created_at',{ascending:false}).limit(60);
      if ($('kind').value) q=q.eq('kind',$('kind').value);
      const {data,error}=await q; if(error) throw error;
      if (version !== searchVersion) return;
      const keyword=$('food').value.trim().toLowerCase();
      const places=data.filter(p=>!keyword || [p.name,p.cuisine,p.description].join(' ').toLowerCase().includes(keyword));
      let reviews=[];
      if(places.length){ const response=await db.from('streetbite_reviews').select('listing_id,rating').in('listing_id',places.map(p=>p.id)).limit(5000); if(response.error) throw response.error;reviews=response.data; }
      if (version !== searchVersion) return;
      message('search-status',`${places.length} place${places.length===1?'':'s'} in ${zip}${data.length===60?' · Showing the latest 60 listings; refine your search.':''}`);
      if(!places.length) renderEmpty('The next local favorite could be yours.','No matching listings yet. Try another ZIP code or invite a local business to join.', $('results'));
      for(const p of places){
        const card=el('article','','place-card');text('span',p.kind,card,'tag');text('h3',p.name,card);text('p',`${p.cuisine} · ${p.city} ${p.zip}`,card);
        const rs=reviews.filter(r=>r.listing_id===p.id);text('p',rs.length?`★ ${(rs.reduce((s,r)=>s+r.rating,0)/rs.length).toFixed(1)} · ${rs.length} review${rs.length===1?'':'s'}`:'No reviews yet',card,'rating');
        text('p',p.description.slice(0,180)+(p.description.length>180?'…':''),card);
        const btn=text('button','View place & reviews ↗',card,'button');btn.type='button';btn.addEventListener('click',()=>openPlace(p));$('results').append(card);
      }
    } catch { message('search-status','We couldn’t load listings. Please try the search again in a moment.'); }
    finally { if(version===searchVersion) busy($('search-form'),false); }
  }
  async function openPlace(place){
    activePlace=place;const detail=$('place-detail');detail.replaceChildren();text('p',place.kind,detail,'eyebrow');text('h2',place.name,detail);text('p',place.description,detail);text('p',`${place.address} · ${place.city} ${place.zip}`,detail);
    const url=safeLink(place.website);if(url){const a=text('a','Visit website / menu ↗',detail,'button');a.href=url;a.target='_blank';a.rel='noopener noreferrer';}
    $('review-form').reset();message('review-status','');$('review-form').hidden=!user || user.id===place.user_id;$('review-signin').hidden=!!user;
    if(user?.id===place.user_id) message('review-status','This is your business. Owners cannot review their own listings.');
    if(!$('place-dialog').open) $('place-dialog').showModal();
    await loadReviews(place.id);
  }
  async function loadReviews(id){
    const target=$('reviews');target.replaceChildren(el('p','Loading reviews…'));
    const {data,error}=await db.from('streetbite_reviews').select('display_name,rating,body,created_at').eq('listing_id',id).order('created_at',{ascending:false}).limit(100);
    if(activePlace?.id!==id)return;
    target.replaceChildren();if(error){text('p','Reviews could not load. Close this listing and try again.',target);return;}
    if(!data.length)text('p','No reviews yet. Share your firsthand experience after signing in.',target);
    for(const r of data){const a=el('article','','review');text('h4',`${r.display_name} · ${r.rating}/5`,a);text('small',new Date(r.created_at).toLocaleDateString(),a);text('p',r.body,a);target.append(a);}
    if(data.length===100)text('p','Showing the 100 most recent reviews.',target,'small');
  }
  $('search-form')?.addEventListener('submit',search);
  $('close-place')?.addEventListener('click',()=>$('place-dialog').close());
  $('review-form')?.addEventListener('submit',async e=>{
    e.preventDefault(); if(!user || !activePlace)return;const form=e.currentTarget,values=new FormData(form);busy(form,true);message('review-status','Saving your review…');
    try{const {error}=await db.from('streetbite_reviews').insert({listing_id:activePlace.id,display_name:values.get('display_name').trim(),rating:Number(values.get('rating')),body:values.get('body').trim()});if(error)throw error;message('review-status','Your review is published. Thank you!');form.reset();form.hidden=true;await loadReviews(activePlace.id);await search();}
    catch(error){message('review-status',errorText(error));}finally{busy(form,false);}
  });

  async function refreshAccount(){
    const {data}=await db.auth.getSession();user=data.session?.user || null;
    if($('account-panel')){$('account-panel').hidden=!!user;$('listing-panel').hidden=!user;if(user)await myListings();}
  }
  $('auth-form')?.addEventListener('submit',async e=>{
    e.preventDefault();const form=e.currentTarget,values=new FormData(form);const email=values.get('email').trim(),password=values.get('password');busy(form,true);message('auth-status','Connecting…');
    try{
      if(e.submitter?.value==='signup'){
        const {data,error}=await db.auth.signUp({email,password});if(error)throw error;
        if(!data.session){signupEmail=email;$('verify-form').hidden=false;message('auth-status','Check your email to confirm your account. If the email contains a confirmation code, enter it below. You can also follow its confirmation link, then return here to sign in.');}
      }else{const {error}=await db.auth.signInWithPassword({email,password});if(error)throw error;}
      await refreshAccount();
    }catch{message('auth-status','Unable to sign in or create this account. Check your email, password and email confirmation, then try again.');}finally{busy(form,false);}
  });
  $('verify-form')?.addEventListener('submit',async e=>{
    e.preventDefault();const form=e.currentTarget;busy(form,true);
    const {error}=await db.auth.verifyOtp({email:signupEmail,token:new FormData(form).get('token').trim(),type:'signup'});
    if(error)message('auth-status','That code could not be confirmed. Check the email and try again.');else await refreshAccount();busy(form,false);
  });
  $('signout')?.addEventListener('click',async()=>{await db.auth.signOut();await refreshAccount();});
  $('new-listing')?.addEventListener('click',()=>{$('listing-form').reset();$('listing-form').elements.id.value='';message('listing-status','Ready for a new listing.');});
  async function myListings(){
    const {data,error}=await db.from('streetbite_listings').select('*').eq('user_id',user.id).order('created_at',{ascending:false});const target=$('my-listings');target.replaceChildren();
    if(error){text('p','Your listings could not load. Refresh and try again.',target);return;}
    if(!data.length)text('p','No listings yet. Add your first one above.',target);
    for(const listing of data){const row=el('div','','my-listing');text('strong',`${listing.name} · ${listing.zip} · ${listing.status==='published'?'Public':'Hidden'}`,row);
      const edit=text('button','Edit',row,'text-button');edit.type='button';edit.onclick=()=>{const form=$('listing-form');for(const [key,value]of Object.entries(listing)){const input=form.elements.namedItem(key);if(input)input.value=value;}form.scrollIntoView({behavior:'smooth',block:'center'});message('listing-status','Editing '+listing.name+'. Publishing changes makes the listing public.');};
      const toggle=text('button',listing.status==='published'?'Hide listing':'Publish again',row,'text-button');toggle.type='button';toggle.onclick=async()=>{toggle.disabled=true;const {error}=await db.from('streetbite_listings').update({status:listing.status==='published'?'hidden':'published'}).eq('id',listing.id).eq('user_id',user.id);if(error){message('listing-status',errorText(error));toggle.disabled=false;}else await myListings();};target.append(row);
    }
  }
  $('listing-form')?.addEventListener('submit',async e=>{
    e.preventDefault();if(!user)return;const form=e.currentTarget,values=new FormData(form),payload={};for(const key of ['name','kind','cuisine','zip','city','address','description','website'])payload[key]=String(values.get(key)||'').trim();
    if(payload.website && !safeLink(payload.website)){message('listing-status','Use an http:// or https:// website address.');return;}
    busy(form,true);message('listing-status','Saving your listing…');
    try{const id=values.get('id');const result=id?await db.from('streetbite_listings').update({...payload,status:'published'}).eq('id',id).eq('user_id',user.id).select('id').single():await db.from('streetbite_listings').insert(payload).select('id').single();if(result.error)throw result.error;form.elements.id.value=result.data.id;message('listing-status',`Published! Diners can find your business by searching ZIP ${payload.zip}.`);await myListings();}
    catch(error){message('listing-status',errorText(error));}finally{busy(form,false);}
  });
  refreshAccount();
})();
