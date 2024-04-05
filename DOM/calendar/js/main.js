function createCalendar(elem, year, month) {
  elem = document.querySelector(elem);

  let mon = month - 1;
  let d = new Date(year, mon);

  let table = `
    <table>
    <caption>${month}.${year}</caption>
      <tr>
        <th>пн</th>
        <th>вт</th>
        <th>ср</th>
        <th>чт</th>
        <th>пт</th>
        <th>сб</th>
        <th>вс</th>
      </tr>
      <tr>
    `;

  for (let i = 0; i < getDay(d); i++) {
    table += "<td></td>";
  }

  while (d.getMonth() == mon) {
    table += "<td>" + d.getDate() + "</td>";
    if (getDay(d) % 7 == 6) {
      table += "</tr><tr>";
    }
    d.setDate(d.getDate() + 1);
  }
  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += "<td></td>";
    }
  }
  table += "</tr></table>";
  elem.insertAdjacentHTML("beforeend", table);
}

function getDay(date) {
  let day = date.getDay();
  if (day == 0) day = 7;
  return day - 1;
}

let selectYear = +prompt("Введите год:");

for (let i = 1; i <= 12; i++) {
  createCalendar(".calendar", selectYear, i);
}

function Update() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(Update, 1000);