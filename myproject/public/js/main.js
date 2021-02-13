const API = '//localhost:3000';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/api/products',
        products: [],
        filteredProducts: [],
        errorText: ''
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => {
                    if (result.ok !== true) {
                        throw new Error(`${url} = Код возвата: ${result.status}`);
                    }
                    return result.json()
                })
                .catch(error => {
                    this.errorText = error.message;
                    throw new Error(error.message);
                })
        },
        postJson(url, data) {
            return fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data) // body data type must match "Content-Type" header
                })
                .then(result => {
                    if (result.ok !== true) {
                        throw new Error(`${url} = Код возвата: ${result.status}`);
                    }
                    return result.json()
                })
                .catch(error => {
                    this.errorText = error.message;
                    throw new Error(error.message);
                })
        },
        putJson(url, data) {
            return fetch(url, {
                method: 'PUT', // *GET, POST, PUT, DELETE, etc.
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data) // body data type must match "Content-Type" header
                })
                .then(result => {
                    if (result.ok !== true) {
                        throw new Error(`${url} = Код возвата: ${result.status}`);
                    }
                    return result.json()
                })
                .catch(error => {
                    this.errorText = error.message;
                    throw new Error(error.message);
                })
        },
        deleteJson(url, data = {}) {
            return fetch(url, {
                method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data) // body data type must match "Content-Type" header
                })
                .then(result => {
                    if (result.ok !== true) {
                        throw new Error(`${url} = Код возвата: ${result.status}`);
                    }
                    return result.json()
                })
                .catch(error => {
                    this.errorText = error.message;
                    throw new Error(error.message);
                })
        },
        onFilterGoods(searchLine) {
            let regex = new RegExp(searchLine, 'i');
            this.filteredProducts = this.products.filter(
                product => regex.test(product.product_name)
            );
        },
        showErrorBox(message) {
            this.errorText = message;
        },
    },
    mounted() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
            })
            .finally(() => this.onFilterGoods(''));
    }
});
