Vue.component('search-form', {
    data() {
        return {
            searchLine: ''
        }
    },
    methods: {
        onFilterGoods() {
            if (this.$root.$refs.view.onFilterGoods) {
                this.$root.$refs.view.onFilterGoods(this.searchLine);
            }
        }
    },
    template: '<form action="#" class="search-form">' +
    '                <input type="text" class="search-field" v-model="searchLine" @input="onFilterGoods()">' +
    '                <button class="btn-search" type="submit" @click.prevent="onFilterGoods()">' +
    '                    <i class="fas fa-search"></i>' +
    '                </button>' +
    '            </form>'
});
