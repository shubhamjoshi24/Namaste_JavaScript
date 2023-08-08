
const cart = ["shoes", "pants", "kurta"];

createOrder(cart, function (orderId) {

    proceedToPayment(orderId, function paymentInfo() {

        showOrderSummary(paymentInfo, function (balance) {

            updateWalletBalance(balance);
        });

    });

});

// createOrder(cart)
//     .then(function (orderId) {
//         return proceedToPayment(orderId);
//     })
//     .then(function (paymentInfo) {
//         return showOrderSummary(paymentInfo);
//     })
//     .then(function (balance) {
//         return updateWalletBalance(balance);
//     });

// // using arrow function

// createOrder(cart)
//     .then((orderId) => proceedToPayment(orderId))
//     .then((paymentInfo) => showOrderSummary(paymentInfo))
//     .then((balance) => updateWalletBalance(balance));



const promise = createOrder(cart);

promise.then(function (orderId) {
    proceedToPayment(orderId);
});



const github_api = "https://api.github.com/users/shubhamjoshi12";

const user = fetch(github_api);
console.log(user);



