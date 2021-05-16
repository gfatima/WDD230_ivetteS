const d = new Date(document.lastModified);
const dayName = d.getDay();
const monthName = d.getMonth();
const year = d.getFullYear();
//const fulldate = dayName + ", " + monthName + " " + d.getDate() +", " + year;
const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
document.getElementById("lastUpdate").textContent = " " + d;
// Year
document.getElementById("copyYear").textContent = year.getFullYear();
