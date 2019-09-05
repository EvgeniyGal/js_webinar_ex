const products = 'apple orange grape watermelon kiwi bananas';
const sales = 'watermelon';
const newProducts = 'melon tomato';
let stock;

let productsArr = products.split(' ');

if (products.includes(sales)) {
  const removeElementID = productsArr.indexOf(sales);
  productsArr.splice(removeElementID, 1);
}

productsArr = productsArr.concat(newProducts.split(' '));

// eslint-disable-next-line prefer-const
stock = productsArr.join(' ');

console.assert(stock === 'apple orange grape kiwi bananas melon tomato',
  'Some thing wrong');

console.log(stock);
