import products from './products';

const productName: string = 'fanny pack';

const product = products.filter(product => product.name === productName)[0];

if (product.preOrder === true) {
  console.log('We will send you a message when the product is on the way!');
};

let shipping : number;
let taxPercent : number;
let taxTotal : number;
let total: number;

let shippingAddress: string = '123, New York';

if (product.price > 25) {
  console.log('shipping is free!');
  shipping = 0;
} else {
  shipping = 5;
}

if (shippingAddress.includes('New York')) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}

taxTotal = (product.price * taxPercent);

total = (product.price + taxTotal + shipping);

console.log({
  productName: product.name,
  shippingAddress,
  productPrice: product.price,
  taxTotal,
  shipping,
  total
})



