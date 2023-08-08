// Functions and Variable Environments

var x = 90;

// we are calling the functions before defining them. This will work properly, as seen in Hoisting.
a();
b();

console.log(x);

function a() {
    var x = 12; //Local scope because of seprate execution context.
    console.log(x);
}

function b() {
    var x = 15;
    console.log(x);
}