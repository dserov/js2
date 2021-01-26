'use strict';

const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];


let productList = new ProductList(products);
productList.render();

let cart = new Cart();

console.log('Общая сумма всех товаров равна:', productList.calcTotalPrice());
