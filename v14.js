// Callback Functions in JavaScript

// setTimeout(function () {
//     console.log("timer");
// }, 5000)

// function x(y) {
//     console.log("x");
//     y();
// };

// x(function y() {
//     console.log("y");
// });

function a() {
    let count = 1;
    document.getElementById("clickMe").addEventListener("click", function xyz() {
        console.log("Button Clicked", count++);
    });
}

a();
