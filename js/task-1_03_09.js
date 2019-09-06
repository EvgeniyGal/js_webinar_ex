const applePrice = '0.4$ / kg';
const appleQuntity = '1.4kg';
const orangePrice = '1.3$ / kg';
const orangeQuntity = '1.2kg';

let totalWeight;
let cost;

const applePriceNumber = Number.parseFloat(applePrice);
const orangePriceNumber = Number.parseFloat(orangePrice);
const appleQuntityNumber = Number.parseFloat(appleQuntity);
const orangeQuntityNumber = Number.parseFloat(orangeQuntity);

totalWeight = (appleQuntityNumber * 100 + orangeQuntityNumber * 100) / 100;
cost = applePriceNumber * appleQuntityNumber
+ orangePriceNumber * orangeQuntityNumber;

console.assert(totalWeight === 2.6, 'Error in weight calculation');

console.log(`Total wight: ${totalWeight}kg. Cost: ${cost}$`);


// =============== Задача дня ================
// Есть цены за килограмм и количество килограмм для двух продуктов.
// Следует рассчиать общий вес покупки и общую стоимость покупки.
// Обязательно сделайте проверку с помощью console.assert
// В проверку запишите ожидаемую сумму и текст сообщения об ошибке,
// если  сумма не совпадет с ожидаемым значением.
// Выведите ответ в строку "Total wight: 00.00kg. Cost: 00.00$"
// используя шаблонную строку
// и полученные значения веса и стоимости покупки.
// NUMBER
