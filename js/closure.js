// let age = 19;

// //outer function
// const parsonalInfo = (name) => {
//     let edu = 'bca'; //outer function's variable

//     //inner function
//     return allInfo = (salary) => {
//         console.log(age); //global variable
//         console.log(name); //outer function parameter
//         console.log(edu); //outer function variable

//         console.log(salary); //inner function parameter
//     }
// }

// //function call
// let res = parsonalInfo('jaydip');
// console.log(res); //return function

// res(20000);
// res(30000);

/******************/

// let count = 0;

// const incrementCounter = () => {
//     count = count + 1;
//     console.log(count);
// }

// incrementCounter();
// count = 10;  //Desadvantage of global varibal.(Anyone can change value)
// incrementCounter();

// let count = 0;

// const incrementCounter = () => {
//     let count = 0;  //Desadvantage of local varibal.(new variable create everytime, start with 0)
//     count = count + 1;
//     console.log(count);
// }

// incrementCounter();
// incrementCounter();

/*************************/

//problem of local and global variable sloved by closure.
const incrementCounter = () => {
    let count = 0;
    return () => {
        count = count + 1;
        console.log(count);
    }
}

let res = incrementCounter();
res();  //1
res(); //2

let res1 = incrementCounter();
res1();  //1
res1(); //2