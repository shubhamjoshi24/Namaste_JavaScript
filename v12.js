// function outer(s) {
//     let a = 10;

//     function inner() {
//         console.log(a, s);
//     }

//     return inner;
//     // inner();
// }


// // outer()();

// outer("Shubham Joshi")(); //here first '()' will return inner function and second '()' to call inner function


// function counter() {
//     var a = 0;
//     return function aIncreament() {
//         a++;
//         console.log(a);
//     }
// }

// var counter1 = counter();
// counter1();
// counter1();

// var counter2 = counter();
// counter2();
// counter2();
// counter2();
// counter2();
// counter2();


// function Counter() {
//     var count = 0;
//     this.increamentCounter = function () {
//         count++;
//         console.log(count);
//     }

//     this.decreamentCounter = function () {
//         count--;
//         console.log(count);
//     }
// }

// Above function Counter and below class Counter do same work or print same numbers.

// class Counter {
//     constructor() {
//         var count = 0;
//         this.increamentCounter = function () {
//             count++;
//             console.log(count);
//         };

//         this.decreamentCounter = function () {
//             count--;
//             console.log(count);
//         };
//     }
// }


// var counter1 = new Counter(); // new keyword for constructor function
// counter1.increamentCounter();
// counter1.increamentCounter();
// counter1.decreamentCounter();
// counter1.decreamentCounter();
// counter1.decreamentCounter();
// counter1.decreamentCounter();


function a() {

    var x = 12;

    return function b() {
        console.log(x);
    };
}


var y = a();
y();