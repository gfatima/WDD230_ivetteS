//const cityid = "5604473";
//const APPID = `b0642f48af45c4e3841e545ddb50089c`

const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&APPID=${APPID}&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
    const currently = document.querySelector(`#currently`);
    const desc = jsObject.weather[0].description; // note how we reference the weather array
    currently.innerHTML = `<strong>${desc.toUpperCase()}</strong>`;

    document.getElementById('temperature').textContent = jsObject.main.temp;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('wind').textContent = jsObject.wind.speed;

  });

  