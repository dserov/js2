'use strict';

const data = {
    hamburger: {
        small: {
            title: 'Маленький',
            price: 50,
            calories: 20
        },
        big: {
            title: 'Большой',
            price: 100,
            calories: 40
        }
    },
    filling: {
        cheese: {
            title: 'С сыром',
            price: 10,
            calories: 20
        },
        salad: {
            title: 'С салатом',
            price: 20,
            calories: 5
        },
        potatoes: {
            title: 'С картофелем',
            price: 15,
            calories: 10
        }
    },
    sprinkling: {
        seasoning: {
            title: 'Посыпать приправой',
            price: 15,
            calories: 0
        },
        mayonnaise: {
            title: 'Полить майонезом',
            price: 20,
            calories: 5
        }
    }
};

let macdak = new MacDak('#hamburger_form', '#total_price', '#calories');
macdak.setData(data);

macdak.renderElement('#hamburger_list', 'hamburger', 'radio', '', 'required');
macdak.renderElement('#filling_list', 'filling', 'radio', '+', 'required');
macdak.renderElement('#sprinkling_list', 'sprinkling', 'checkbox', '+');
