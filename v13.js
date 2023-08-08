
//  Function Statement aka Function Declaration

// function a() {
//     console.log("a called");
// }
// a();


// Function Statement

// var b = function () {
//     console.log("b called");
// }
// b();


// Anonymous Function
// function () {
// }


// Named Function Expression

// var c = function x() {
//     console.log("c called");
//     x();
// }

// c();
// // x();


//  Difference b/w Parameters & Arguments

// function s(param1, param2) {
//     // labels/identifiers are parameters
//     console.log("DSA");
// }
// s();
// // s(arg1, arg2);// Arguments - values pass inside function call


//  First Class Function aka First Class Citizens

// var e = function (param1) {
//     console.log(param1);
// };

// e(function () {

// });

// Other way of doing the same thing
// var b = function (param1) {
//     console.log(param1);
// }
// function xy() {

// };
// b(xy); //same thing as previos code

// we can reutrn a function from a function

// var f = function () {
//     return function () { }; //reutrn anonymous function 
// };
// console.log(f());

var f = function () {
    return function xyz() { }; // return xyz
};
console.log(f());



