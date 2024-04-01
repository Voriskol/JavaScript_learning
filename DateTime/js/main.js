let a = new Date(2014,11,31,12,30,0);
console.log(a.toString());
let options = {
  era: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
  timezone: "UTC",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
}

console.log(a.toLocaleString("ru", options))

