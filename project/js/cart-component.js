Vue.component('cart-component', {
    data: function () {
        return {
            isVisibleCart: false,
            cartProducts: [],
            cartUrl: '/getBasket.json',
        }
    },
    computed: {
        itemsCount() {
            let count = this.cartProducts.reduce(function (accum, product) {
                return accum += product.quantity
            }, 0);
            return count;
        }
    },
    template: `<div class="cart">
                 <search-form></search-form>
                 <button class="btn-cart" type="button" @click="isVisibleCart = !isVisibleCart">Корзина<div class="cart-item-count" title="Общее количестко товаров в корзине">{{itemsCount}}</div></button>
                 <div v-show="isVisibleCart" class="cart-block">
                     <p v-show="cartProducts.length === 0">Корзина пуста!</p>
                     <cart-item-component v-for="item of cartProducts" :key="item.id_product" :data-id="item.id_product" :cart-item="item"></cart-item-component>
                 </div>
             </div>`,
    methods: {
        addProduct(product) {
            let productIndex = this.cartProducts.map(item => item.id_product).indexOf(product.id_product);
            if (productIndex !== -1) {
                // увеличим количество
                this.cartProducts[productIndex].quantity++;
                return;
            }
            // добавим новый
            let cartItem = Object.assign({quantity: 1}, product);
            this.cartProducts.push(cartItem);
        },
        deleteProduct() {
            let id_product = parseInt(event.target.dataset['id']);
            let productIndex = this.cartProducts.map(item => item.id_product).indexOf(id_product);
            if (productIndex === -1) {
                return;
            }
            // найден!
            this.cartProducts[productIndex].quantity--;
            if (this.cartProducts[productIndex].quantity === 0) {
                this.cartProducts.splice(productIndex, 1);
            }
        },
    },
    mounted() {
        // прочитаем корзину с сервака
        this.$root.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for (let el of data.contents) {
                    this.cartProducts.push(el);
                }
            });
    }
});
