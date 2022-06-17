let inputBox = document.querySelector('.input-ip');
let ip = document.querySelector('#ip-desc');
let loc = document.querySelector('#locatiom-desc');
let timezone = document.querySelector('#timezone-desc'); 
let isp = document.querySelector('#isp-desc');
let btn = document.querySelector('.arrow-icon');

btn.addEventListener('click',()=>{
    appdata()
})

appdata()

async function appdata(){
   
   
    let data = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_8FYAO0MwwTip5cThbw4NOn1nrEWmJ&ipAddress=${inputBox.value}`)
    // let data = await fetch(`http://ip-api.com/json/${inputBox.value}?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,currency,isp,org,as,query`)
    let mydata =  await data.json();
    console.log(mydata);
    // console.log(mydata.ip);
    // console.log(mydata.isp);

    displayInfo(mydata);
}

function displayInfo(mydata) {
    ip.innerHTML = mydata.ip;
    loc.innerHTML = mydata.location.city;
    timezone.innerHTML = mydata.location.timezone;
    isp.innerHTML = mydata.isp;
    let lat = mydata.location.lat;
    let long = mydata.location.lng;
    showMap(lat,long)    
}


// setting up map 
function showMap(lat,long) {
    
    var map = L.map('map').setView([lat,long], 10);
    L.marker([lat,long]).addTo(map);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);
    
}




