const fs=require('node:fs');
const file='data/lowell-launch.json';
const rows=JSON.parse(fs.readFileSync(file,'utf8'));
let cursor=0;
async function run(){
 while(cursor<rows.length){
  const p=rows[cursor++];if(p.location_kind==='service_area'||p.latitude)continue;
  try{const address=`${p.address}, ${p.city}`;const r=await fetch('https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address='+encodeURIComponent(address)+'&benchmark=Public_AR_Current&format=json',{signal:AbortSignal.timeout(20000)});const m=(await r.json()).result.addressMatches[0];if(!m)throw Error('No address match');p.latitude=m.coordinates.y;p.longitude=m.coordinates.x;p.zip=m.addressComponents.zip;p.geocode_source='US Census Public_AR_Current';}
  catch(e){console.log('Needs address review:',p.name,e.message);}
  fs.writeFileSync(file,JSON.stringify(rows,null,2)+'\n');
 }
}
Promise.all([run(),run(),run()]).then(()=>console.log('Geocoded',rows.filter(r=>r.latitude).length,'of',rows.filter(r=>r.location_kind==='street_address').length,'street addresses'));
