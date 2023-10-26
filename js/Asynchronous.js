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

//2. Promises

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

console.log("Program start");

const getData = async () => {
    let response = await fetch("https://fakestoreapi.com/products")

    let data = await response.json();
    console.log(data);
}
getData();

console.log("I am in the program");