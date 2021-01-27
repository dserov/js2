'use strict';

class ProductItem {
    constructor(product) {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
    }
    render() {
            return `<div class="product-item" data-product-id="${this.id}">
                <h3 class="product-item__header">${this.title}</h3>
                <p class="product-item__price">${this.price}</p>
                <button class="product-item__buy-btn buy-btn">Купить</button>
            </div>`;
    }
}
