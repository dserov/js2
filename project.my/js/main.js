'use strict';

const BASE_API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const GET_CATALOG_DATA = '/catalogData.json';  // – получить список товаров
const GET_BASKET = '/getBasket.json'; // – получить содержимое корзины;
const ADD_TO_BASKET = '/addToBasket.json'; // – добавить товар в корзину;
const DELETE_FROM_BASKET = '/deleteFromBasket.json'; // – удалить товар из корзины.

const productList = new ProductList();
productList.fetchProducts()
    .then(() => {
        productList.render();
        console.log('Общая сумма всех товаров равна:', productList.calcTotalPrice());
    })
    .catch(reason => {
        console.log(reason)
    });

const cart = new Cart();
cart.fetchItems()
    .then(() => {
        console.log("Корзина прочитана");
        console.log(cart.cartItemList);
    })
    .catch(reason => {
        console.log(reason)
    });

function makeGETRequest(subUrl) {
    const request = new Request(BASE_API_URL + subUrl, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        // mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        // headers: {
        //     'Content-Type': 'application/json'
        // }
    });
    return fetch(request)
        .then(response => {
            if (!response.ok) {
                throw new Error('Что-то пошло не так');
            }
            return response.json();
        });
}

function makePOSTRequest(subUrl, data) {
    const request = new Request(BASE_API_URL + subUrl, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        // mode: 'no-cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        // headers: {
        //     'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        // },
        // redirect: 'follow', // manual, *follow, error
        // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data)
    });
    return fetch(request)
        .then(response => {
            if (!response.ok) {
                throw new Error('Что-то пошло не так');
            }
            return response.json();
        });
}
