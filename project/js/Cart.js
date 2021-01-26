'use strict';

class Cart {
    constructor(element='.btn-cart') {
        this.element = element;
        this.cartItemList = [];
        document.querySelector(element).addEventListener('click', this.showCart)
    }
    addProduct(product) {

    }
    removeProduct() {

    }
    showCart() {
        alert('showCart');
    }
}
