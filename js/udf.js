//UDF (User Define Function)

//function declaration

// function greeting() {
//     console.log("good morning");
// }

// greeting();

// function calcAge(birthyear) {
//     let age;

//     age = 2023 - birthyear

//     return age;
// }

// let res = calcAge(1990);
// console.log(res);

// let res1 = calcAge(2004);
// console.log(res1);

/********************************/


//Arrow function

// const greeting1 = () => {
//     console.log("good morning");
// }

// greeting1();

// const calcAge1 = (birthyear) => {
//     let age;

//     age = 2023 - birthyear;

//     // return age;
//     console.log(age);
// }

// let result = calcAge1(1990);
// console.log(result);

const costing = (place) => { //4
    if(place === 'goa') {
        return 35000; //5
    } else if (place === 'manali') {
        return 85000;
    }
}

const packages = (place1, place2) => { //2
    //nested function

    let cost1 = costing(place1); //3 //6
    let cost2 = costing(place2);
    // console.log(cost2);

    let msg;

    msg = place1 + 'consting you' + cost1 + '.' + ' '  + place2 + 'consting you' + cost2 + '.';
    return msg; //7
}

let res = packages('goa', 'manali'); //1 //8
console.log(res);