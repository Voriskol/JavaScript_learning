/**
 * Функция преобразует строку с временеем в минуты
 * @param {string} time время в виде строки, например "02:08".
 * Может быть в диапазоне от 00:00 до 23:59.
 * @return {number} целое число в минутах.
 */

function timeToMinute(time) {
  try {
    let hour = +time.split(":")[0];
    let minute = +time.split(":")[1];
    if( !(hour>=0 && hour<=23) || !(minute>=0 && minute<=59)) {
      throw new RangeError("Неверный формат аргументов")
    }
    return hour*60+minute;
  } catch(error) {
    console.log(error)
  }
}

console.log(timeToMinute("20:38"));
