Vue.component('search-form', {
    data() {
        return {
            searchLine: ''
        }
    },
    template: '<form action="#" class="search-form">' +
    '                <input type="text" class="search-field" v-model="searchLine" @input="$root.onFilterGoods(searchLine)">' +
    '                <button class="btn-search" type="submit" @click.prevent="$root.onFilterGoods(searchLine)">' +
    '                    <i class="fas fa-search"></i>' +
    '                </button>' +
    '            </form>'
});
