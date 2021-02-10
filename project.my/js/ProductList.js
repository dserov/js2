'use strict';

class ProductList {
    constructor(element = '.products') {
        this.renderElement = document.querySelector(element);
        this.productList = [];
    }

    fetchProducts() {
        return new Promise((resolve, reject) => {
            const request = makeGETRequest(GET_CATALOG_DATA);
            request.then(data => {
                    // process json result
                    for (let item of data) {
                        let productItem = new ProductItem(item);
                        this.productList.push(productItem);
                    }
                    resolve();
                },
                reason => {
                    reject(reason);
                }
            );
        });
    }

    /**
     * Заполняем разметкой элемент-контейнер
     */
    render() {
        this.renderElement.textContent = '';
        this.productList.forEach(productItem => {
            this.renderElement.insertAdjacentHTML('beforeend', productItem.render());
        });
    }

    /**
     * Расчет общей суммы всех товаров
     *
     * @return {*|number}
     */
    calcTotalPrice() {
        return this.productList.reduce((accum, product) => accum + product.price, 0);
    }
}
