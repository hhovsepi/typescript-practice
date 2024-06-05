"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./products");
const productName = 'fanny pack';
const product = products_1.default.filter(product => product.name === productName)[0];
if (product.preOrder === true) {
    console.log('We will send you a message when the product is on the way!');
}
;
let shipping;
let taxPercent;
let taxTotal;
let total;
let shippingAddress = '123, New York';
if (product.price > 25) {
    console.log('shipping is free!');
    shipping = 0;
}
else {
    shipping = 5;
}
if (shippingAddress.includes('New York')) {
    taxPercent = 0.1;
}
else {
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
});
