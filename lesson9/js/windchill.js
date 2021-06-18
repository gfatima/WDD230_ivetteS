function windchill() {
  let temperature = parseFloat(document.getElementById("temperature").textContent);
  let wind = parseFloat(document.getElementById("wind").textContent);
  let result = windc(temperature, wind);

  document.getElementById("cwind").innerHTML = result;

}

function windc(temp, speed) {
  if (temp >= 50 && speed > 3) {
    let x = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    return Math.round(x * 10) / 10;
  } else {
    let x = "n/a";
    return x;
  }
}
windchill();