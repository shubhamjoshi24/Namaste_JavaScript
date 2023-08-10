// Last episode of Namaste Javascript

const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);//orderId
// console.log(promise);

promise
    .then(function (orderId) {
        console.log(orderId);
        return orderId;
        // proceedToPayment(orderId);
    })
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
    })
    .catch(function (err) {
        console.log(err.message);
    })
    .then(function (orderId) {
        console.log("No matter what happens, I will definetely be called.")
    })


function createOrder(cart) {

    const pr = new Promise(function (resolve, reject) {

        if (!validateCart(cart)) {
            const err = new Error("Cart is not Valid");
            reject(err);
        }

        const orderId = "12345";
        if (orderId) {

            setTimeout(function () {
                resolve(orderId);
            }, 5000);

            // resolve(orderId);
        }

    });

    return pr;
}

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        resolve("Payment Successful");

    });
}

function validateCart() {
    // return true;
    return false;
}
