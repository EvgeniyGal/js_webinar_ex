const max = 255;

const red = Math.floor(Math.random() * max);
const green = Math.floor(Math.random() * max);
const blue = Math.floor(Math.random() * max);
console.log(red);
console.log(green);
console.log(blue);

// Fix leading zero if number < 16 in HEX
function fixLeadZero(numberHEX) {
  if (String(numberHEX).length < 2) {
    return `0${numberHEX}`;
  }
  return numberHEX;
}

function toHEXColour(redComponent, greenComponent, blueComponent) {
  return `#${fixLeadZero(Number(redComponent).toString(16))}${fixLeadZero(Number(greenComponent).toString(16))}${fixLeadZero(Number(blueComponent).toString(16))}`;
}

console.assert(toHEXColour(2, 255, 14) === '#02ff0e', 'Some thing vrong with HEX');

function toRGBColour(redComponent, greenComponent, blueComponent) {
  return `rgb(${redComponent}, ${greenComponent}, ${blueComponent})`;
}

console.assert(toRGBColour(2, 255, 14) === 'rgb(2, 255, 14)', 'Some thing vrong with RGB');

function toPercentColour(redComponent, greenComponent, blueComponent) {
  return `rgb(${Math.round(((redComponent / 255) * 100))}%, ${Math.round(((greenComponent / 255) * 100))}%, ${Math.round(((blueComponent / 255) * 100))}%)`;
}

console.assert(toPercentColour(2, 255, 14) === 'rgb(1%, 100%, 5%)', 'Some thing vrong with persentege');

const hex = toHEXColour(red, green, blue);
const rgb = toRGBColour(red, green, blue);
const rgbPercent = toPercentColour(red, green, blue);

console.log(hex);
console.log(rgb);
console.log(rgbPercent);

// ============== Пример дня ================
// ========== числа + строки =================
// let max = Math.max(124, 0x3fa, 0b111111111);
// console.log(max); // 1018

// const toCSSHex = `#${max.toString(16)}`; // #3fa

// console.log(toCSSHex);

// const num0 = 0 % 3; // 0
// const num1 = 1 % 3; // 1
// const num2 = 2 % 3; // 2
// const num3 = 2 % 3; // 0
// const num4 = 2 % 3; // 1
// const num5 = 2 % 3; // 2
// const num6 = 2 % 3; // 0
// const num123456 = 123456 % 3; // 0
// const num123457 = 123456 % 3; // 1
// const num123458 = 123458 % 3; // 2
// const num123459 = 123459 % 3; // 0
// ============== Задача дня ================
// const max = Math.max(124, 0x3fa, 0b111111111);
// // Генерируется случайно  три числа от до max === 1018
// // задайте на основании этих чисел цвет в формате hex:  #00ff00
// // валидный диапазон числел для цвета  0 - ff в hex
// // задайте строку цвета в rgb в дипазоне 0 - 255:  rgb(0, 122, 255)
// // задайте строку цвета в rgb в дипазоне 0% - 100%: rgb(25%, 55%, 88%)

// const red = Math.floor(Math.random() * max);
// const green = Math.floor(Math.random() * max);
// const blue = Math.floor(Math.random() * max);
// console.log(red);
// console.log(green);
// console.log(blue);

// let hex;
// let rgb;
// let rgbPercent;

// console.log(hex);
// console.log(rgb);
// console.log(rgbPercent);
// // сегодня без assert - невозможно предсказать случайное число
// // но позже, изучив функции, мы найдем выход из этой ситуации без проверок
