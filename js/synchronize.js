// const firstFun = () => {
//     console.log("I am First process");
// }

// const secondFun = () => {
//     console.log("I am Second process");
// }

// const thirdFun = () => {
//     console.log("I am Third process");
// }

// firstFun();
// secondFun();
// thirdFun();


//synchronize operation - problem
// const firstFun = () => {
//     console.log("I am First process");
// }

// const secondFun = () => {
//     let d = new Date();

//     //5 second work
//     while(Date.now() - d < 5000) {

//     }

//     console.log("I am Second process");
// }

// const thirdFun = () => {
//     // block 5 second (wait for second process complate)
//     console.log("I am Third process");
// }

// firstFun();
// secondFun();
// thirdFun();

//callback function

const print = (data) => { //4
    console.log(data);
} 

const add = (a,b ,callback) => { //2
    let c = a+b
    callback(c);
}

add(10,20, print)