'use strict';

class CartItem extends ProductItem {
    constructor(product, quantity) {
        super(product);
        this.quantity = quantity;
    }
    totalSumma() {
        return this.price * this.quantity
    }
}
