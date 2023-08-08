//  Map, Filter & Reduce()

const arr = [5, 1, 2, 3, 6, 4, 7, 9, 12, 17];

// function double(x) {
//     return 2 * x; //this function double the elements of array
// }
// const output = arr.map(double);
// console.log(output);

// function triple(x) {
//     return 3 * x;//this function triple the elements of array
// }
// const t = arr.map(triple);
// console.log(t);

// function binary(x) {
//     return x.toString(2);//toString(2) is used to convert decimal into binary in JS
// }
// const b = arr.map(binary);
// console.log(b);

// // we can pass function binary to the map()
// const b = arr.map(function binary(x) {
//     return x.toString(2);//toString(2) function to convert decimal into binary in JS
// });
// console.log(ba);

// // we can also use arrow function
// const b = arr.map((x) => {
//     return x.toString(b);
// })
// console.log(a);

// // In arrow function, we can also remove curly braces{} and return
// const a = arr.map((x) => x.toString(2))
// console.log(a);

// // filter Odd values
// function odd(x) {
//     return x % 2 == 1;
// }
// const o = arr.filter(odd);
// console.log("Odd", o);

// // filter even values
// function even(x) {
//     return x % 2 == 0;
// }
// const e = arr.filter(even);
// console.log("even", e);

// // value greater than 4
// function greaterThan4(x) {
//     return x > 4;
// }
// const g = arr.filter(greaterThan4);
// console.log("Greater than 4", g);

// // we can pass function greaterThan to the filter()
// const g = arr.filter(function greaterThan4(x) {
//     return x > 4;
// });
// console.log("Greater than 4", g);

// // we can also use arrow function
// const g = arr.filter((x) => {
//     return x > 4;
// });
// console.log("Greater than 4", g);

// // In arrow function, we can also remove curly braces{} and return
// const g = arr.filter((x) => x > 4);
// console.log("Greater than 4", g);

// // sum of elements of array: Non-Functional Programming way

// function findSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// console.log(findSum(arr));

// // reduce function way
// const sumOfElem = arr.reduce(function (accumulator, current) {
//     accumulator = accumulator + current;
//     return accumulator;

// }, 0);
// console.log(sumOfElem);

// // find max element inside an array: Non-Functional Programming way
// function findMax(arr) {
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(findMax(arr));

// // reduce function way
// const find_max = arr.reduce(function (accumulator, current) {
//     if (current > accumulator) {
//         accumulator = current;
//     }
//     return accumulator;
// }, 0);

// Accumulator is just a label which represent the accumulated value till now,
// so we can also label it as max in this case

// const find_max = arr.reduce(function (max, current) {
//     if (current > max) {
//         max = current;
//     }
//     return max;
// }, 0);

// console.log(find_max);

const users = [
    { firstName: "Shubham", lastName: "Joshi", age: 20 },
    { firstName: "Deepak", lastName: "Pandey", age: 27 },
    { firstName: "Nikhil", lastName: "Kunwar", age: 18 },
    { firstName: "Divine", lastName: "Drug", age: 24 },
];

// Get Array of Full Name; ["Shubham Joshi", Sonu Bhatt, ...]
// const fullNameArr = users.map((user) => user.firstName + " " + user.lastName);
// console.log(fullNameArr); // Output:- [ 'Shubham Joshi', 'Sonu Joshi', 'Nikhil Bhatt', 'Divine Drug' ]

// Get the count/report of how many unique people with unique age are there
// like: { 20: 2, 24: 1, 18: 1 }
// We should use reduce, why? we want to reduce some information form the array. Basically we want to get a single object as output
// acc = accumulator, curr = current

// const report = users.reduce(function (acc, curr) {
//     if (acc[curr.age]) {
//         acc[curr.age] = ++acc[curr.age];
//     }
//     else {
//         acc[curr.age] = 1;
//     }
//     return acc; // to every time reutrn update object

// }, {})
// console.log(report);// { 18: 1 ,20: 2, 24: 1 }

// Function Chaining 
// Problem :- we want to print the first name of person which age is below 25

const outp = users
    .filter((x) => x.age < 25)
    .map((x) => x.firstName);

console.log(outp);

// using reduce() function
const outpt = users.reduce((acc, curr) => {
    if (curr.age < 25) {
        acc.push(curr.firstName);//the push() method adds new items to the end of the array.
    }
    return acc;
}, []);
console.log(outpt);





