'use strict';

class MacDak {
    constructor(formEl, totalPriceEl, caloriesEl) {
        this.formEl = document.querySelector(formEl);
        this.totalPriceEl = document.querySelector(totalPriceEl);
        this.caloriesEl = document.querySelector(caloriesEl);
        this.data = {};

        this.formEl.addEventListener('submit', (event) => {
            event.preventDefault();
            let data = this.calculate();
            this.totalPriceEl.innerHTML = data.totalPrice;
            this.caloriesEl.innerHTML = data.calories;
        });

        this.formEl.addEventListener('reset', () => {
            this.totalPriceEl.innerHTML = '0';
            this.caloriesEl.innerHTML = '0';
        });
    }

    setData(data) {
        this.data = data;
    }

    calculate() {
        let totalPrice = 0;
        let calories = 0;
        const formData = new FormData(this.formEl);
        for (let pair of formData) {
            let name = pair[0];
            let subName = pair[1];
            let item = this.data[name][subName];
            totalPrice += item.price;
            calories += item.calories;
        }
        return {totalPrice: totalPrice, calories: calories};
    }

    /**
     *
     * @param listEl
     * @param elementName
     * @param inputType
     * @param addSymbol
     * @param inputRequired
     */
    renderElement(listName, elementName, inputType = 'radio', addSymbol='', inputRequired = '') {
        let elementList = this.data[elementName];
        for(let index in elementList) {
            let item = elementList[index];
            document.querySelector(listName).insertAdjacentHTML('beforeend',
                `<label>
                    <input type="${inputType}" name="${elementName}" value="${index}" ${inputRequired}>
                    ${item.title} (${addSymbol}${item.price} рублей, ${addSymbol}${item.calories} калорий)
                </label><br>`
            );
        }
    }
}
