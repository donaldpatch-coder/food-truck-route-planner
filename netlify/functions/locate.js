const headers={'Content-Type':'application/json','Cache-Control':'public, max-age=3600'};
const reply=(statusCode,body)=>({statusCode,headers,body:JSON.stringify(body)});
exports.handler=async(event)=>{
 if(event.httpMethod!=='GET')return reply(405,{error:'Use GET'});
 const q=event.queryStringParameters||{};
 try{
  if(q.address){
   const address=String(q.address).trim();if(address.length<8||address.length>300)return reply(400,{error:'Enter a full public business or service address.'});
   const r=await fetch('https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address='+encodeURIComponent(address)+'&benchmark=Public_AR_Current&format=json',{signal:AbortSignal.timeout(12000)});
   if(!r.ok)throw Error('Provider unavailable');const m=(await r.json()).result?.addressMatches?.[0];if(!m)return reply(404,{error:'Address could not be located. Include street number, city, state and ZIP.'});
   return reply(200,{latitude:m.coordinates.y,longitude:m.coordinates.x,label:m.matchedAddress,source:'US Census'});
  }
  const input=String(q.place||'').trim();if(input.length<2||input.length>100)return reply(400,{error:'Enter a ZIP code or city and state.'});
  let path;
  if(/^\d{5}$/.test(input))path='/us/'+input;
  else{const match=input.match(/^([A-Za-z .'-]+?)(?:,\s*([A-Za-z]{2}))?$/);if(!match)return reply(400,{error:'Use a five-digit ZIP or City, ST.'});path='/us/'+(match[2]||'ma').toLowerCase()+'/'+encodeURIComponent(match[1].trim().toLowerCase());}
  const r=await fetch('https://api.zippopotam.us'+path,{signal:AbortSignal.timeout(12000)});if(!r.ok)return reply(404,{error:'Place not found. Try a nearby ZIP code.'});
  const d=await r.json(),p=d.places?.[0];if(!p)throw Error('No location');
  return reply(200,{latitude:Number(p.latitude),longitude:Number(p.longitude),label:d['post code']?`${p['place name']}, ${p['state abbreviation']} ${d['post code']}`:`${d['place name']}, ${d['state abbreviation']}`,source:'Zippopotam.us / GeoNames'});
 }catch{return reply(503,{error:'Location lookup is temporarily unavailable. Try again shortly.'});}
};
