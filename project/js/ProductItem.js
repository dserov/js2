'use strict';

class ProductItem {
    constructor(product) {
        this.id_product = product.id_product;
        this.product_name = product.product_name;
        this.price = product.price;
    }
    render() {
            return `<div class="product-item" data-product-id="${this.id_product}">
                <h3 class="product-item__header">${this.product_name}</h3>
                <p class="product-item__price">${this.price}</p>
                <button class="product-item__buy-btn buy-btn">Купить</button>
            </div>`;
    }
}
