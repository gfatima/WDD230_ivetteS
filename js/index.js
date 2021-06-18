//const d = new Date(document.lastModified);

const d = new Date();

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

let dayOfWeek = days[d.getDay()];
let month = months[d.getMonth()];
let day = d.getDate();
let year = d.getFullYear();
let hour = d.getHours();
let min = d.getMinutes();
let second = d.getSeconds();

//const fulldate = dayName + ", " + monthName + " " + d.getDate() +", " + year;
const fulldate = `${dayOfWeek}, ${day} ${month} ${year}, ${hour}:${min}:${second}`;
document.getElementById("lastUpdate").textContent = " " + fulldate;
// Year
document.getElementById("copyYear").textContent = d.getFullYear();