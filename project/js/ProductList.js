'use strict';

class ProductList {
    constructor(products, element = '.products') {
        this.renderElement = document.querySelector(element);
        this.productList = [];
        products.forEach( product => {
            let productItem = new ProductItem(product);
            this.productList.push(productItem);
        });
    }

    /**
     * Заполняем разметкой элемент-контейнер
     */
    render() {
        this.renderElement.textContent = '';
        this.productList.forEach( productItem => {
            this.renderElement.insertAdjacentHTML('beforeend', productItem.render());
        });
    }

    /**
     * Расчет общей суммы всех товаров
     *
     * @return {*|number}
     */
    calcTotalPrice() {
        return this.productList.reduce( (accum, product) => accum + product.price, 0);
    }
}
