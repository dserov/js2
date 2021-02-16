import searchForm from './search-form'
import cartItemComponent from './cart-item-component'
import { API } from './main'

export default {
    data: function () {
        return {
            isVisibleCart: false,
            cartProducts: [],
            cartUrl: '/api/cart/',
            isVisibleSearchForm: false
        }
    },
    components: {
        'cart-item-component': cartItemComponent,
        'search-form': searchForm
    },
    computed: {
        itemsCount() {
            let count = this.cartProducts.reduce(function (accum, product) {
                return accum += product.quantity
            }, 0);
            return count;
        }
    },
    watch: {
        $route(to, from) {
            // обрабатываем изменение параметров маршрута...
            this.isVisibleSearchForm = to.path === '/catalog';
        }
    },
    template: `<div class="cart">
                 <search-form v-show="isVisibleSearchForm"></search-form>
                 <div></div>
                 <button class="btn-cart" type="button" @click="isVisibleCart = !isVisibleCart">Корзина<div class="cart-item-count" title="Общее количестко товаров в корзине">{{itemsCount}}</div></button>
                 <div v-show="isVisibleCart" class="cart-block">
                     <p v-show="cartProducts.length === 0">Корзина пуста!</p>
                     <cart-item-component v-for="item of cartProducts" :key="item.id_product" :cart-item="item"></cart-item-component>
                 </div>
             </div>`,
    methods: {
        addProduct(product) {
            let productIndex = this.cartProducts.map(item => item.id_product).indexOf(product.id_product);
            if (productIndex !== -1) {
                // увеличим количество
                this.$root.putJson(`${API + this.cartUrl + product.id_product}`, {quantity: 1}).then(response => {
                    this.cartProducts[productIndex].quantity++;
                });
                return;
            }
            // добавим новый
            let cartItem = Object.assign({quantity: 1}, product);
            this.$root.postJson(`${API + this.cartUrl}`, cartItem).then(data => {
                this.cartProducts.push(cartItem);
            });
        },
        deleteProduct() {
            let id_product = parseInt(event.target.dataset['id']);
            let productIndex = this.cartProducts.map(item => item.id_product).indexOf(id_product);
            if (productIndex === -1) {
                return;
            }
            // найден!
            this.$root.deleteJson(`${API + this.cartUrl + id_product}`).then(data => {
                this.cartProducts[productIndex].quantity--;
                if (this.cartProducts[productIndex].quantity === 0) {
                    this.cartProducts.splice(productIndex, 1);
                }
            });
        },
    },
    mounted() {
        this.isVisibleSearchForm = this.$router.history.current.path === '/catalog';

        // прочитаем корзину с сервака
        this.$root.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for (let el of data.contents) {
                    this.cartProducts.push(el);
                }
            });
    }
}
