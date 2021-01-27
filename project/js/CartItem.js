'use strict';

class CartItem extends ProductItem {
    constructor(product, count) {
        super(product);
        this.count = count;
    }
    totalSumma() {
        return this.price * this.count
    }
}
