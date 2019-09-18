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

let $pizza  = null;
let $mushrooms = null;
let $pepperoni = null;
let $pineapple = null;

$(document).ready(function () {

    $pizza = $('.pizza');
    $mushrooms = $('.mushrooms');
    $pepperoni = $('.pepperonis');
    $pineapple = $('.pineapples');

    $('.btn-topping').click(function(e) {

        const topping = toppings.find(topp => topp.name === e.target.id);

        if (!topping) {
            alert('Could not find the topping');
            return;
        }

        const hasTopping = order.toppings.find(top => top.name === topping.name);

        if (hasTopping) {
            order.toppings = order.toppings.find(top => top.name !== topping.name) || [];
            switch(topping.name) {
                case 'cheese': $pizza.removeClass('no-cheese'); break;
                case 'pepperoni': $pepperoni.empty(); break;
                case 'mushroom': $mushrooms.empty(); break;
                case 'pineapple': $pineapple.empty(); break;
                default: ''
            }
            order.total -= topping.price;
            $('#total').text(order.total.toFixed(2));
            return;
        }

        order.toppings.push(topping);
        order.total += topping.price;

        switch(topping.name) {
            case 'cheese': $pizza.addClass('no-cheese'); break;
            case 'pepperoni': $pepperoni.append(generateTopping(topping)); break;
            case 'mushroom': $mushrooms.append(generateTopping(topping)); break;
            case 'pineapple': $pineapple.append(generateTopping(topping)); break;
            default: ''
        }

        $('#total').text(order.total.toFixed(2));

    });

});

function generateTopping(topping) {
    const looper = Array(10).fill(topping.name);
    return looper.map(item => `<div class="${item}"></div>`).join('');
}