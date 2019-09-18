const order = {
    toppings: [],
    basePrice: 80,
    total: 80
}

const toppings = [{
        name: 'pepperoni',
        price: 20
    },{
        name: 'mushroom',
        price: 40
    }, {
        name: 'cheese',
        price: 0
    }, {
        name: 'pineapple',
        price: 30
    }
]

// Cache topping containers
let $pizza  = null;
let $mushrooms = null;
let $pepperoni = null;
let $pineapple = null;

$(document).ready(function () {
    // Write the best jQuery ever here
});

// Automatically generate the toppings based on the name and id from the button.
function generateTopping(topping) {
    const looper = Array(10).fill(topping.name);
    return looper.map(item => `<div class="${item}"></div>`).join('');
}