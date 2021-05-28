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
let day = d.getUTCDate();
let year = d.getFullYear();

//const fulldate = dayName + ", " + monthName + " " + d.getDate() +", " + year;
const fulldate = `${dayOfWeek}, ${day} ${month} ${year}`;
document.getElementById("lastUpdate").textContent = " " + fulldate;
// Year
document.getElementById("copyYear").textContent = d.getFullYear();