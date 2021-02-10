'use strict';

class Cart {
    constructor(element = '.btn-cart') {
        this.element = element;
        this.cartItemList = [];
        document.querySelector(this.element).addEventListener('click', this.showCart)
    }

    /**
     *
     * @param  cartItem CartItem
     */
    addItem(cartItem) {
        makePOSTRequest(ADD_TO_BASKET, cartItem)
            .then(response => {
                console.log(response);
            })
    }

    removeItem(id_product) {
        makePOSTRequest(DELETE_FROM_BASKET, {id_product: id_product})
            .then(response => {
                console.log(response);
            })
    }

    fetchItems() {
        return new Promise((resolve, reject) => {
            const request = makeGETRequest(GET_BASKET);
            request.then(data => {
                    // process json result
                    for (let item of data.contents) {
                        let cartItem = new CartItem(item, item.quantity);
                        this.cartItemList.push(cartItem);
                    }
                    resolve(this.cartItemList);
                },
                reason => {
                    reject(reason);
                }
            );
        });
    }

    showCart() {
        alert('show cart');
    }
}
