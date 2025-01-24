
function calculateTotal() {
    let totalSum = 0;


    const itemPrices = document.querySelectorAll('.cart__item-price');


    if (itemPrices.length === 0) {
        console.error('');
        return totalSum;
    }

    itemPrices.forEach(item => {
        let price = parseFloat(item.dataset.price);
    });

    return totalSum;
}


function calculateTotalAndApplyDiscount() {
    let totalSum = 0;


    const itemPrices = document.querySelectorAll('.cart__item-price');


    if (itemPrices.length === 0) {
        console.error('Не найдено элементов с классом .cart__item-price');
        return totalSum;
    }

    itemPrices.forEach(item => {
        let price = parseFloat(item.dataset.price);

        if (!isNaN(price)) {

            price *= 0.8;
            totalSum += price;


            item.textContent = price.toFixed(2) + ' руб.';
            item.dataset.price = price.toFixed(2);
        } else {
            console.error(`Некорректное значение data-price в элементе:`, item);
        }
    });

    return totalSum;
}


function updateTotalDisplay(total) {
    const totalElement = document.querySelector('.cart-sum__final');
    if (totalElement) {
        totalElement.textContent = total.toFixed(2) + ' руб.';
    }
}


function applyDiscount() {
    const discountButton = document.querySelector('#applyDiscount');
    if (discountButton.disabled) {
        console.warn('Скидка уже была применена!');
        return;
    }


    const totalSum = calculateTotalAndApplyDiscount();


    updateTotalDisplay(totalSum);


    discountButton.disabled = true;
    discountButton.textContent = 'Купон применён';
}

document.addEventListener('DOMContentLoaded', () => {
    const initialTotal = calculateTotal();
    updateTotalDisplay(initialTotal);


    const discountButton = document.querySelector('#applyDiscount');
    discountButton.addEventListener('click', applyDiscount);
});
