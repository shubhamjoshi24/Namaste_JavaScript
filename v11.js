

// function x() {
//     var i = 1;
//     setTimeout(function () {
//         console.log(i);
//         console.log('dsjkbj');
//     }, 3000);            //3000 miliseconds = 3 Sec.

// }

// x();


// print 1 after 1 sec, 2 after 2 sec till 5 using 'let'

function s() {

    for (let i = 1; i <= 5; i++) {

        setTimeout(function () {
            console.log(i);
        }, i * 1000);              //1000 miliseconds = 1 Sec
    }
}

s();

// print 1 after 1 sec, 2 after 2 sec till 5 using 'var'

// function z() {

//     for (var i = 1; i <= 5; i++) {

//         function close(a) {
//             setTimeout(function () {
//                 console.log(a);
//             }, a * 1000);              //1000 miliseconds = 1 Sec
//         }
//         close(i);

//     }
// }

// z();


