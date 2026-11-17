/* Uses the retained MyFoodTruck database. Only a public publishable key belongs here. */
(() => {
  'use strict';
  const $ = (id) => document.getElementById(id);
  if (!window.supabase) { const status = $('search-status') || $('auth-status'); if (status) status.textContent = 'The connection could not load. Please refresh and try again.'; return; }
  const db = window.supabase.createClient('https://vyjquxjxjywhrtihpzwk.supabase.co', 'sb_publishable_dnU2ePpleMBcl5Qt3kJriw_AFTeDa1w');
  window.streetbiteDb = db;
  let user = null, activePlace = null, signupEmail = '', searchVersion = 0;
  const el = (tag, text, cls) => { const n = document.createElement(tag); if (text) n.textContent = text; if (cls) n.className = cls; return n; };
  const safeLink = (raw) => { try { const u = new URL(raw); return ['http:', 'https:'].includes(u.protocol) ? u.href : null; } catch { return null; } };
  const message = (id, text) => { if ($(id)) $(id).textContent = text; };
  const busy = (form, state) => form.querySelectorAll('button').forEach(b => b.disabled = state);
  const errorText = (error) => error?.code === '23505' ? 'This listing or review already exists. Open your existing listing to edit it.' : 'We could not save this. Please check your connection and sign-in, then try again. Your entries are still here.';
  const text = (tag, value, parent, cls) => { const n = el(tag, value, cls); parent.append(n); return n; };
  function renderEmpty(title, body, parent) { const n=el('div', '', 'empty'); text('h3',title,n); text('p',body,n); const a=text('a','List your business →',n);a.href='list-business.html';parent.append(n); }

  let searchCenter={latitude:42.645,longitude:-71.31,label:'Lowell, MA'}, centerInput='Lowell, MA', latestPlaces=[], savedOnly=false, map=null, markers=null;
  let saved=[];try{saved=JSON.parse(localStorage.getItem('streetbiteSavedSpots')||'[]');if(!Array.isArray(saved))saved=[];}catch{}
  const isLive=p=>p.user_id && p.live_until && new Date(p.live_until)>new Date();
  const until=p=>new Date(p.live_until).toLocaleTimeString([],{hour:'numeric',minute:'2-digit'});
  const icon=p=>p.kind==='Food truck'?'🚚':p.kind==='Cafe'?'☕':p.kind==='Bakery'?'🥐':'●';
  const fields='*';
  function savedCount(){message('saved-count',String(saved.length));}
  function toggleSaved(id,button){saved=saved.includes(id)?saved.filter(x=>x!==id):[...saved,id];try{localStorage.setItem('streetbiteSavedSpots',JSON.stringify(saved));}catch{message('search-status','Your browser could not save this spot.');}button.textContent=saved.includes(id)?'♥ Saved':'♡ Save spot';button.setAttribute('aria-pressed',String(saved.includes(id)));savedCount();if(savedOnly)search();}
  async function locate(input,address=false){const r=await fetch('/.netlify/functions/locate?'+(address?'address=':'place=')+encodeURIComponent(input));const d=await r.json();if(!r.ok)throw Error(d.error||'Location could not be found.');return d;}
  function placeCard(p,live=false){
    const card=el('article','','place-card'+(live?' live-card':''));
    if(p.photo_url && safeLink(p.photo_url)){const img=el('img');img.src=p.photo_url;img.alt=p.name+' — photo supplied by business';img.loading='lazy';img.referrerPolicy='no-referrer';card.append(img);}else text('div',icon(p),card,'food-symbol');
    const meta=el('div','','card-meta');text('span',p.kind,meta,'tag');if(isLive(p))text('span','● Owner checked in',meta,'live-badge');else text('span',p.user_id?'Owner-managed':'Unclaimed',meta,'claim-label');card.append(meta);
    text('h3',p.name,card);text('p',p.cuisine,card,'card-cuisine');
    text('p',isLive(p)?`${p.live_note||'Serving now'} · until ${until(p)}`:p.location_kind==='service_area'?'Regional truck · current stop unconfirmed':p.address,card,'stop-copy');
    text('p',p.distance_miles==null?'Distance unavailable':`${Number(p.distance_miles).toFixed(1)} miles from search point`,card,'small');
    if(p.review_count)text('p',`★ ${Number(p.average_rating).toFixed(1)} · ${p.review_count} Street Bite review${p.review_count===1?'':'s'}`,card,'rating');else text('p','No Street Bite reviews yet',card,'small');
    const actions=el('div','','card-actions');const view=text('button',live?'View Menu & Map ↗':'View place & reviews ↗',actions,'button');view.type='button';view.onclick=()=>openPlace(p);
    const save=text('button',saved.includes(p.id)?'♥ Saved':'♡ Save spot',actions,'save-button');save.type='button';save.setAttribute('aria-pressed',String(saved.includes(p.id)));save.onclick=()=>toggleSaved(p.id,save);card.append(actions);return card;
  }
  function renderMap(places){
    if(!$('discovery-map')||!window.L)return;
    if(!map){map=L.map('discovery-map',{scrollWheelZoom:false}).setView([searchCenter.latitude,searchCenter.longitude],13);L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);markers=L.layerGroup().addTo(map);}
    markers.clearLayers();const points=[];
    for(const p of places){if(p.latitude==null||p.longitude==null)continue;const point=[p.latitude,p.longitude];points.push(point);const popup=el('div');text('strong',p.name,popup);text('p',isLive(p)?`${p.live_note||p.live_address} · until ${until(p)}`:p.address,popup);const b=text('button','View listing',popup,'text-button');b.onclick=()=>openPlace(p);
      const marker=L.marker(point,{title:p.name,icon:L.divIcon({className:'map-pin '+(isLive(p)?'pin-live':p.kind==='Food truck'?'pin-truck':''),html:icon(p),iconSize:[34,34],iconAnchor:[17,34]})}).addTo(markers).bindPopup(popup);marker.getElement()?.setAttribute('aria-label',p.name+' — '+p.kind);
    }
    if(points.length)map.fitBounds(L.latLngBounds(points),{padding:[25,25],maxZoom:15});else map.setView([searchCenter.latitude,searchCenter.longitude],12);
    requestAnimationFrame(()=>map.invalidateSize());
  }
  async function refreshLive(version){
    if(!$('live-feed'))return;
    const {data,error}=await db.rpc('streetbite_nearby',{p_lat:searchCenter.latitude,p_lng:searchCenter.longitude,p_radius:Number($('radius').value),p_live:true,p_kind:'',p_query:''});
    if(version!==searchVersion)return;const feed=$('live-feed');feed.replaceChildren();
    if(error){text('p','Live check-ins could not load. Please refresh in a moment.',feed);return;}
    const active=(data||[]).filter(isLive);
    if(!active.length){const empty=el('div','','live-empty');text('h3','The next live stop could be yours.',empty);text('p','No active owner check-ins in this radius right now. Explore listed local spots below, or check in your own business.',empty);const a=text('a','Owner? Share your stop →',empty);a.href='list-business.html';feed.append(empty);}
    for(const p of active)feed.append(placeCard(p,true));
  }
  async function search(event){
    event?.preventDefault();if(!$('search-form').reportValidity())return;const version=++searchVersion;message('search-status','Finding your local bites…');busy($('search-form'),true);
    try{
      const input=$('zip').value.trim();if(input!==centerInput){searchCenter=await locate(input);centerInput=input;}
      if(version!==searchVersion)return;message('area-label',searchCenter.label);
      const {data,error}=await db.rpc('streetbite_nearby',{p_lat:searchCenter.latitude,p_lng:searchCenter.longitude,p_radius:Number($('radius').value),p_kind:$('kind').value,p_live:$('live-only').checked,p_query:$('food').value.trim()});if(error)throw error;if(version!==searchVersion)return;
      latestPlaces=data||[];const places=latestPlaces.filter(p=>!savedOnly||saved.includes(p.id));const near=places.filter(p=>p.distance_miles!=null).length,regional=places.length-near;
      message('search-status',`${savedOnly?'Saved on this device · ':''}${near} spot${near===1?'':'s'} within ${$('radius').value} miles of ${searchCenter.label}${regional?' + '+regional+' regional trucks with unconfirmed stops':''}. Distances are straight-line estimates.`);
      $('results').replaceChildren();if(!places.length)renderEmpty(savedOnly?'No saved matches in this area.':'No matching spots in this radius.',savedOnly?'Save a place with the heart button, or turn Saved spots off.':'Try a wider radius or a different craving. We won’t substitute unrelated locations.', $('results'));
      for(const p of places)$('results').append(placeCard(p));renderMap(places);await refreshLive(version);
    }catch(error){message('search-status',error.message&&!(error.code)?error.message:'We couldn’t load listings. Please try again shortly.');}
    finally{if(version===searchVersion)busy($('search-form'),false);}
  }
  document.querySelectorAll('[data-kind]').forEach(button=>button.addEventListener('click',()=>{$('kind').value=button.dataset.kind;document.querySelectorAll('.quick-filters [data-kind]').forEach(b=>(b.classList.toggle('active',b.dataset.kind===button.dataset.kind),b.setAttribute('aria-pressed',String(b.dataset.kind===button.dataset.kind))));search();$('find').scrollIntoView({behavior:'smooth'});}));
  $('radius')?.addEventListener('change',()=>search());$('live-only')?.addEventListener('change',()=>search());$('refresh-results')?.addEventListener('click',()=>search());
  $('show-live')?.addEventListener('click',()=>{$('live-only').checked=true;search();});
  $('near-me')?.addEventListener('click',()=>{if(!navigator.geolocation){message('search-status','Location is unavailable in this browser. Enter a ZIP or city instead.');return;}message('search-status','Waiting for your location permission…');navigator.geolocation.getCurrentPosition(pos=>{searchCenter={latitude:pos.coords.latitude,longitude:pos.coords.longitude,label:'your location'};centerInput='Your location';$('zip').value=centerInput;search();$('find').scrollIntoView({behavior:'smooth'});},()=>{message('search-status','Location permission was denied or unavailable. Enter a ZIP code or city instead.');},{timeout:10000,maximumAge:60000,enableHighAccuracy:false});});
  $('saved-toggle')?.addEventListener('click',()=>{savedOnly=!savedOnly;$('saved-toggle').setAttribute('aria-pressed',String(savedOnly));search();$('find').scrollIntoView({behavior:'smooth'});});savedCount();
  async function community(){if(!$('community-reviews'))return;const target=$('community-reviews');const {data,error}=await db.from('streetbite_reviews').select('listing_id,display_name,rating,body,dish_name,heat,richness').eq('is_public',true).order('created_at',{ascending:false}).limit(3);target.replaceChildren();if(error){text('p','Community reviews are temporarily unavailable.',target);return;}if(!data.length){text('div','No Street Bite reviews yet. Find a local spot and share your first-hand experience. Your review could help someone find their next favorite.',target,'review-empty');return;}for(const r of data){const a=el('article','','review');text('p','★'.repeat(r.rating)+' · '+r.display_name,a,'rating');if(r.dish_name)text('p',r.dish_name,a);window.streetbiteCreatorUI?.badges(r,a);text('p',r.body,a);target.append(a);}}
  async function openPlace(place){
    activePlace=place;const detail=$('place-detail');detail.replaceChildren();text('p',place.kind,detail,'eyebrow');text('h2',place.name,detail);text('p',place.description,detail);text('p',`${place.address} · ${place.city}${place.zip?' '+place.zip:''}`,detail);
    const url=safeLink(place.website);if(url){const a=text('a','Visit website / menu ↗',detail,'button');a.href=url;a.target='_blank';a.rel='noopener noreferrer';}
    if(isLive(place)){text('p',`Owner checked in: ${place.live_address} · ${place.live_note||'Serving now'} · until ${until(place)}`,detail,'live-detail');}
    if(place.latitude!=null&&place.longitude!=null){const a=text('a','Open location in map ↗',detail,'map-detail-link');a.href=`https://www.openstreetmap.org/?mlat=${place.latitude}&mlon=${place.longitude}#map=17/${place.latitude}/${place.longitude}`;a.target='_blank';a.rel='noopener noreferrer';}
    if(place.source_url){const a=text('a','Public listing source ↗',detail,'source-detail-link');a.href=place.source_url;a.target='_blank';a.rel='noopener noreferrer';text('p',`Source checked ${place.source_checked_on}. Details and hours may change; this is not a live opening-hours verification.`,detail,'small');}
    if(!place.user_id){const a=text('a','Claim this listing →',detail,'claim-link');a.href='list-business.html?claim='+encodeURIComponent(place.id);text('p','Unclaimed listing. Ownership requests are reviewed before access is granted.',detail,'small');}
    $('review-form').reset();message('review-status','');$('review-form').hidden=!user || user.id===place.user_id;$('review-signin').hidden=!!user;
    if(user?.id===place.user_id) message('review-status','This is your business. Owners cannot review their own listings.');
    if(!$('place-dialog').open) $('place-dialog').showModal();
    await loadReviews(place.id);
  }
  async function loadReviews(id){
    const target=$('reviews');target.replaceChildren(el('p','Loading reviews…'));
    const {data,error}=await db.from('streetbite_reviews').select('user_id,display_name,rating,body,created_at,dish_name,heat,richness,video_url,disclosure').eq('is_public',true).eq('listing_id',id).order('created_at',{ascending:false}).limit(100);
    if(activePlace?.id!==id)return;
    target.replaceChildren();if(error){text('p','Reviews could not load. Close this listing and try again.',target);return;}
    if(!data.length)text('p','No reviews yet. Share your firsthand experience after signing in.',target);
    let profiles=[];if(data.length){const response=await db.from('streetbite_creator_profiles').select('user_id,handle,display_name').eq('is_public',true).in('user_id',[...new Set(data.map(r=>r.user_id))]);profiles=response.data||[];}
    if(activePlace?.id!==id)return;
    for(const r of data){const a=el('article','','review');const creator=profiles.find(p=>p.user_id===r.user_id);text('h4',`${creator?.display_name||r.display_name} · ${r.rating}/5 overall`,a);if(creator){const link=text('a','Creator profile · @'+creator.handle,a,'creator-handle');link.href='creators.html?creator='+encodeURIComponent(creator.handle);}text('small',new Date(r.created_at).toLocaleDateString(),a);if(r.dish_name)text('p','Dish: '+r.dish_name,a);window.streetbiteCreatorUI?.badges(r,a);text('p',r.body,a);window.streetbiteCreatorUI?.videoLink(r,a);window.streetbiteCreatorUI?.disclosure(r,a);target.append(a);}
    if(data.length===100)text('p','Showing the 100 most recent reviews.',target,'small');
  }
  $('search-form')?.addEventListener('submit',search);
  $('close-place')?.addEventListener('click',()=>$('place-dialog').close());
  $('review-form')?.addEventListener('submit',async e=>{
    e.preventDefault(); if(!user || !activePlace)return;const form=e.currentTarget,values=new FormData(form);busy(form,true);message('review-status','Saving your review…');
    try{if(String(values.get('video_url')||'').trim()&&!window.streetbiteCreatorUI)throw Error('Video tools could not load. Refresh before sharing a video link.');const {error}=await db.from('streetbite_reviews').insert({listing_id:activePlace.id,display_name:values.get('display_name').trim(),rating:Number(values.get('rating')),body:values.get('body').trim(),dish_name:String(values.get('dish_name')||'').trim(),heat:values.get('heat')==null||values.get('heat')===''?null:Number(values.get('heat')),richness:values.get('richness')==null||values.get('richness')===''?null:Number(values.get('richness')),video_url:window.streetbiteCreatorUI?.normalizeSocial(values.get('video_url'))||'',disclosure:values.get('disclosure')||'none'});if(error)throw error;message('review-status','Your review is published. Thank you!');form.reset();form.hidden=true;await loadReviews(activePlace.id);await search();}
    catch(error){message('review-status',error.message&&!error.code?error.message:errorText(error));}finally{busy(form,false);}
  });

  async function refreshAccount(){
    const {data}=await db.auth.getSession();user=data.session?.user || null;
    if($('account-panel')){$('account-panel').hidden=!!user;$('listing-panel').hidden=!user;if(user)await myListings();}if($('claim-panel'))await showClaim();
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
      const toggle=text('button',listing.status==='published'?'Hide listing':'Publish again',row,'text-button');toggle.type='button';toggle.onclick=async()=>{toggle.disabled=true;const {error}=await db.from('streetbite_listings').update({status:listing.status==='published'?'hidden':'published'}).eq('id',listing.id).eq('user_id',user.id);if(error){message('listing-status',errorText(error));toggle.disabled=false;}else await myListings();};ownerLiveControls(listing,row);target.append(row);
    }
  }
  async function showClaim(){
    const id=new URLSearchParams(location.search).get('claim');if(!id||!/^[0-9a-f-]{36}$/i.test(id))return;$('claim-panel').hidden=false;
    const {data:listing,error}=await db.from('streetbite_listings').select('id,name,user_id').eq('id',id).single();if(error){message('claim-name','Listing unavailable');return;}message('claim-name',listing.name);
    $('claim-form').hidden=!user||!!listing.user_id;message('claim-status',listing.user_id?'This listing already has an owner.':!user?'Sign in below to request review.':'Your request will be reviewed before ownership changes.');
    if(user){const {data}=await db.from('streetbite_claim_requests').select('status').eq('listing_id',id).eq('user_id',user.id).maybeSingle();if(data){message('claim-status','Your ownership request is '+data.status+'.');$('claim-form').hidden=true;}}
  }
  $('claim-form')?.addEventListener('submit',async e=>{e.preventDefault();if(!user)return;const form=e.currentTarget;busy(form,true);try{const {error}=await db.from('streetbite_claim_requests').insert({listing_id:new URLSearchParams(location.search).get('claim'),message:new FormData(form).get('message').trim()});if(error)throw error;form.hidden=true;message('claim-status','Request saved. Ownership is pending verification; no access has been transferred.');}catch{message('claim-status','Could not save the request. Check your sign-in or an existing request, then try again.');}finally{busy(form,false);}});
  function ownerLiveControls(listing,parent){
    const details=el('details','','owner-live-controls');text('summary',isLive(listing)?'Manage live check-in · until '+until(listing):'Go live / share where you’re parked',details);
    const form=el('form');const label=text('label','Public service address',form);const input=el('input');input.name='stop';input.value=listing.live_address||`${listing.address}, ${listing.city} ${listing.zip||''}`;input.required=true;input.minLength=8;input.maxLength=250;label.append(input);
    const noteLabel=text('label','Stop name / short note',form);const note=el('input');note.name='note';note.value=listing.live_note||'';note.maxLength=140;note.placeholder='e.g. Brewery patio — serving lunch';noteLabel.append(note);
    const timeLabel=text('label','Serving for',form);const select=el('select');select.name='minutes';for(const [v,t]of [[30,'30 minutes'],[60,'1 hour'],[120,'2 hours'],[240,'4 hours']]){const o=text('option',t,select);o.value=v;}timeLabel.append(select);
    const confirm=text('label','',form,'consent');const checkbox=el('input');checkbox.type='checkbox';checkbox.required=true;confirm.append(checkbox,document.createTextNode('I am serving customers at this public location now.'));
    text('p','This is a public owner check-in, not background GPS tracking. It expires automatically. End it when you close or leave.',form,'small');const publish=text('button','Publish live stop',form,'button');publish.type='submit';const status=text('p','',form);status.setAttribute('role','status');
    if(isLive(listing)){const stop=text('button','End check-in now',form,'button outline');stop.type='button';stop.onclick=async()=>{const {error}=await db.from('streetbite_listings').update({live_until:null,live_note:null,live_address:null,live_latitude:null,live_longitude:null}).eq('id',listing.id).eq('user_id',user.id);if(error)status.textContent='Could not end check-in. Please try again.';else await myListings();};}
    form.onsubmit=async e=>{e.preventDefault();busy(form,true);status.textContent='Verifying public stop…';try{const geo=await locate(input.value.trim(),true);const {error}=await db.from('streetbite_listings').update({live_address:geo.label,live_latitude:geo.latitude,live_longitude:geo.longitude,live_note:note.value.trim(),live_until:new Date(Date.now()+Number(select.value)*60000-15000).toISOString()}).eq('id',listing.id).eq('user_id',user.id).select('id').single();if(error)throw error;message('listing-status','Live stop published. It will appear to diners in range and expire automatically.');await myListings();}catch{status.textContent='Could not publish. Check the full public address and your connection, then try again.';}finally{busy(form,false);}};
    details.append(form);parent.append(details);
  }
  $('listing-form')?.addEventListener('submit',async e=>{
    e.preventDefault();if(!user)return;const form=e.currentTarget,values=new FormData(form),payload={};for(const key of ['name','kind','cuisine','zip','city','address','description','website'])payload[key]=String(values.get(key)||'').trim();
    if(payload.website && !safeLink(payload.website)){message('listing-status','Use an http:// or https:// website address.');return;}
    busy(form,true);message('listing-status','Locating your public business address…');
    try{const geo=await locate(`${payload.address}, ${payload.city} ${payload.zip}`,true);payload.latitude=geo.latitude;payload.longitude=geo.longitude;payload.photo_url=String(values.get('photo_url')||'').trim();if(payload.photo_url&&(!safeLink(payload.photo_url)||!payload.photo_url.startsWith('https://')))throw Error('Use an https:// photo address.');const id=values.get('id');if(!id){const {data:existing}=await db.from('streetbite_listings').select('id,name').eq('zip',payload.zip).limit(200);const match=(existing||[]).find(p=>p.name.toLowerCase().replace(/[^a-z0-9]/g,'')===payload.name.toLowerCase().replace(/[^a-z0-9]/g,''));if(match){const link=el('a','This business is already listed. Open its claim options →');link.href='list-business.html?claim='+match.id;$('listing-status').replaceChildren(link);return;}}const result=id?await db.from('streetbite_listings').update({...payload,status:'published'}).eq('id',id).eq('user_id',user.id).select('id').single():await db.from('streetbite_listings').insert(payload).select('id').single();if(result.error)throw result.error;form.elements.id.value=result.data.id;message('listing-status',`Published! Diners can find your business by searching ZIP ${payload.zip}.`);await myListings();}
    catch(error){message('listing-status',errorText(error));}finally{busy(form,false);}
  });
  refreshAccount();
  if($('search-form')){const params=new URLSearchParams(location.search);if(params.get('zip'))$('zip').value=params.get('zip');if(params.get('q'))$('food').value=params.get('q');if(params.get('kind')&&Array.from($('kind').options).some(o=>o.value===params.get('kind')))$('kind').value=params.get('kind');search().then(async()=>{const key=params.get('place'),listing=params.get('listing');if(key||/^[0-9a-f-]{36}$/i.test(listing||'')){const {data}=await db.from('streetbite_listings').select('*').eq(key?'source_key':'id',key||listing).eq('status','published').maybeSingle();if(data)openPlace(data);}});community();setInterval(()=>{if(!document.hidden&&!$('place-dialog').open)search();},60000);}
})();
