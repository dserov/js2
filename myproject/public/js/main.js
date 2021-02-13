const API = '//localhost:3000';

const routes = [
    {path: '/', component: pageMain()},
    {path: '/catalog', component: pageCatalog()},
    {path: '/contacts', component: pageContacts()},
    {path: '/feedback', component: pageFeedback()}
];

const router = new VueRouter({
    routes: routes
});

const app = new Vue({
    router: router,
    el: '#app',
    data: {
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
        showErrorBox(message) {
            this.errorText = message;
        },
    }
});
