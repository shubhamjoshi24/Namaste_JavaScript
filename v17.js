console.log("Start");

// setTimeout(function cb() {
//     console.log("Call Back");
// }, 5000);

function cb() {
    console.log("Call Back");
}

setTimeout(cb, 5000);


// millions line of code

// let startDate = new Date().getTime();
// let endDate = startDate;
// while (endDate <= startDate + 10000) {
//     endDate = new Date().getDate();
// }

console.log("while expires");

// setTimeout(function cb() {
//     console.log("Call Back with 0 milliseconds");
// }, 0);

// setTimeout() function with 0 milliseconds

console.log("End");
