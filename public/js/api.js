const fetch=require("node-fetch");async function getData(t){var a="https://api.nasa.gov/mars-photos/api/v1/rovers/",e="&api_key=6vA8UNxGma5qV8Q3f6Rr7v3vPOMmUhyxQqVwkmLs";let o=await fetch(a+t+"/latest_photos?"+e);var r=(await o.json()).latest_photos[0].sol;let s=await fetch(a+t+"/photos?sol="+r+e);const i=await s.json();return i.photos.map(filterData)}function filterData(t){return{id:t.id,sol:t.sol,camera:t.camera.full_name,img_src:t.img_src,earth_date:t.earth_date,rover:t.rover.name}}module.exports={getData:getData};