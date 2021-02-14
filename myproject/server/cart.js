const logger = require('./logger');

let add = (cart, req) => {
    cart.contents.push(req.body);
    recalcAmount(cart);
    logger.log('add', req.body.product_name);
    return JSON.stringify(cart, null, 4);
};
let change = (cart, req) => {
    let find = cart.contents.find(el => el.id_product === +req.params.id);
    find.quantity += req.body.quantity;
    recalcAmount(cart);
    logger.log(`increment quantity to ${find.quantity}`, find.product_name);
    return JSON.stringify(cart, null, 4);
};
let remove = (cart, req) => {
    let find = cart.contents.find(el => el.id_product === +req.params.id);
    if (find !== undefined) {
        find.quantity --;
        if (find.quantity === 0) {
            let idx = cart.contents.indexOf(find);
            cart.contents.splice(idx, 1);
            logger.log(`delete`, find.product_name);
        } else {
            logger.log(`decrement quantity to ${find.quantity}`, find.product_name);
        }
    }
    recalcAmount(cart);
    return JSON.stringify(cart, null, 4);
};

let recalcAmount = (cart) => {
    cart.countGoods = cart.contents.reduce(function (accum, product) {
        return accum += product.quantity
    }, 0);
    cart.amount = cart.contents.reduce(function (accum, product) {
        return accum += product.price * product.quantity
    }, 0);
};

module.exports = {
    add,
    change,
    remove
};