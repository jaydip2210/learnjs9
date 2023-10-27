//Asynchronous achived by:

//1. callback function

// console.log("Program start");

// const display = (data) => {
//     console.log(data);
// }

// const getData = (callback) => {
//     setTimeout(function() {
//         let d = {id:101, name:'jaydip'}
//         callback(d)
//     }, 2000)
// }

// getData(display);

// console.log("I am in the program");

// 2. Promises

// console.log("Program start");

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(function() {
//         let d = {id:101, name:'jaydip'}
//         resolve(d)
//     }, 2000)
// })

// console.log(myPromise);

// myPromise
//     .then((res) => console.log(res))
//     .catch((error) => console.log(error));

// console.log("I am in the program");

//3. async await

// console.log("Program start");

// const getData = async () => {
//     let response = await fetch("https://fakestoreapi.com/products")

//     let data = await response.json();
//     console.log(data);
// }
// getData();

// console.log("I am in the program");

//4. Promise.all

// let promise1 = fetch("https://fakestoreapi.com/products")
// let promise2 = fetch("https://fakestoreapi.com/carts")
// let promise3 = fetch("https://fakestoreapi.com/users")

// Promise.all([promise1, promise2, promise3])
//     .then((response) => {
//         let res = response.map((r) => r.json());
//         console.log(res);
//         return Promise.all(res);
//     })
// .then((data) => console.log(data));


//Callback Hell

// const firstFun = (a, callback) => {
//     setTimeout(function() {
//         console.log("I am first process");
//         callback(a+5)
//     }, 1000)
// }

// const secoundFun = (a, callback) => {
//     setTimeout(function() {
//         console.log("I am second process");
//         callback(a*2)
//     }, 1000)
// }

// const thirdFun = (a, callback) => {
//     setTimeout(function() {
//         console.log("I am third process");
//         callback(a-10)
//     }, 1000)
// }

// firstFun(10, function(r1) {
//     console.log(r1);
// })

// firstFun(10, function(r1) {
//     secoundFun(r1, function(r2) {
//         thirdFun(r2, function(r3) {
//             console.log(r3);
//         })
//     })
// })


// Promise thi solve callback Hell

const firstFun = (a) => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("I am first process");
            resolve(a + 5)
        }, 1000)
    })
}

const secondFun = (a) => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("I am second process");
            resolve(a * 2)
        }, 1000)
    })
}
const thirdFun = (a) => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("I am third process");
            resolve(a - 10)
        }, 1000)
    })
}

firstFun(10)
    .then((r1) => secondFun(r1))
    .then((r2) => thirdFun(r2))
    .then((r3) => console.log(r3))
    .catch((error) => console.log(error));