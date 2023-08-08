// Season 2 Episode 01 :- Callback Hell

// Good part of Callback, we can do async operations in JS 

console.log("Shubham");

setTimeout(function () {
    console.log("Google");
}, 3000);

console.log("Joshi");


const cart = ["shoes", "pant", "kurta"];

// Callback Hell

api.createOrder(cart, function () {
    api.proceedToPayment(function () {
        api.showOrderSummary(function () {
            api.updateWallet()
        });
    });
});

// Inversion Of control

api.createOrder(cart, function () {
    api.proceedToPayment();
});
