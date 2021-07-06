const cityid = "5585010";
const APPID = `b0642f48af45c4e3841e545ddb50089c`

const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&APPID=${APPID}&units=imperial`;

const apiForecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityid}&units=imperial&APPID=${APPID}`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const currently = document.querySelector(`#currently`);
    const desc = jsObject.weather[0].description; // note how we reference the weather array
    currently.innerHTML = `<strong>${desc.toUpperCase()}</strong>`;

    document.getElementById('temperature').textContent = jsObject.main.temp;
    document.getElementById('humidity').textContent = jsObject.main.humidity + '  ';
    document.getElementById('wind').textContent = jsObject.wind.speed + '  ';

  });

  fetch(apiForecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
      let day = 0;
      const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const fiveDayForecast = jsObject.list.filter(forecast => forecast.dt_txt.includes('18:00:00'));
      console.log(fiveDayForecast);

      fiveDayForecast.forEach(x => {
        let d = new Date(x.dt_txt);
        document.getElementById(`dayofweek${day+1}`).textContent = dayofWeek[d.getDay()];
        document.getElementById(`forecast${day+1}`).textContent = x.main.temp;

        const imagesrc = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`; // note the concatenation
        const desc = x.weather[0].description;

        document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc); // focus on the setAttribute() method
        document.getElementById(`icon${day+1}`).setAttribute('alt', desc);

        day++;

      });

    });