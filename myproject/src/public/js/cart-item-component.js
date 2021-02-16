export default {
    data: function () {
        return {
            imgCatalog: 'https://placehold.it/100x50',
        }
    },
    props: {
        cartItem: Object
    },
    template: `<div class="cart-item">
                   <div class="product-bio">
                       <img :src="cartItem.img_product" alt="Some image" width="100px" height="100px">
                   </div>
                   <div class="product-desc">
                       <p class="product-title">{{cartItem.product_name}}</p>
                       <p class="product-quantity">Quantity: {{cartItem.quantity}}</p>
                       <p class="product-single-price">\${{cartItem.price}} each</p>
                   </div>
                   <div class="right-block">
                       <p class="product-price">\${{cartItem.quantity*cartItem.price}}</p>
                       <button class="del-btn" :data-id="cartItem.id_product" @click="$parent.deleteProduct()">&times;</button>
                   </div>
               </div>`
}