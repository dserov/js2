const pageCatalog = () => {
    return {
        template: `
            <div>
                <h1>Каталог</h1>
                <div class="tovar_list clearfix d-md-flex">
                    <p class=".goods-list" v-if="products.length === 0">Список товаров пуст!</p>
                    <div class="card" v-for="product of filteredProducts" :key="product.id_product">
                        <img class="card-img-top mt-3 mb-sm-3" :src="product.img_product" width="128" height="128">
                        <div class="card-body">
                            <h5 class="card-title">{{product.product_name}}</h5>
                            <p>Цена: {{product.price}}</p>
                            <button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>
                        </div>
                    </div>
                </div>
            </div>`,
        data() {
            return {
                catalogUrl: '/api/products',
                products: [],
                filteredProducts: []
            }
        },
        methods: {
            onFilterGoods(searchLine) {
                let regex = new RegExp(searchLine, 'i');
                this.filteredProducts = this.products.filter(
                    product => regex.test(product.product_name)
                );
            }
        },
        mounted() {
            this.$root.getJson(`${API + this.catalogUrl}`)
                .then(data => {
                    for (let el of data) {
                        this.products.push(el);
                    }
                })
                .finally(() => this.onFilterGoods(''));
        }
    }
};
