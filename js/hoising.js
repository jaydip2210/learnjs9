// console.log(x); //undifined //decalaration using var move to top
// var x;
// x = 10;

// console.log(x); //error //decalaration using let/const can not move to top
// let x;
// x= 10; 

// console.log(x); //error //not access decalaration or initialation
// x= 10; 

// x = 10; //var lagi jay var x = 10;
// console.log(x); //10 //decalaration done automatically at the top and access 10 from memory

// x = 10;
// let x;
// console.log(x); //error

// x = 10;
// var x;
// console.log(x); //10

// console.log(x); //undifined
// x = 10;
// var x;

// function demo() {
//     var x; //function scope (any variable declared with let/var/const is access only in function)
//     x = 10;
//     console.log(x);
// }

// demo();
// console.log(x); //error

// function demo() {
//     if(true) {
//         var x; //function scope
//         x = 10;
//     }
//     console.log(x); //10
// }

// demo();
// console.log(x); //error

// function demo() {
//     if(true) {
//         let x; //function scope + block scope (if, for, while, do while, switch...)
//         x = 10;
//     }
//     console.log(x); //error
// }

// demo();
// console.log(x); //error

function demo() {
    let x; //global + function scope
    if(true) {
        x = 10;
    }
    console.log(x); //10
}

demo();
console.log(x); //error