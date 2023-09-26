//1

let arr = [10,8,94,52,170]

// const ArrMax = (arr) => {
//     let max = arr[0];
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i] > arr[0]) {
//             max = arr[i];
//         }
//     }
//     console.log(max);
// }

// ArrMax(arr);

//2

// const ArrMin = (arr) => {
//     let min = arr[0];
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i] < arr[0]) {
//             min = arr[i];
//         }
//     }
//     console.log(min);
// }

// ArrMin(arr);

//3

// const sortAsc = (arr) => {
//     let temp;

//     for (let i=0; i<arr.length; i++) {
//         for (let j=i+1; j<arr.length; j++) {
//             if (arr[j] < arr[i]) {
//                 temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     console.log(arr);
//     console.log(arr[0], arr[arr.length-1]); //max min find karva mate
// }

// sortAsc(arr);

//4

const sortdes = (arr) => {
    let temp;

    for (let i=0; i<arr.length; i++) {
        for (let j=i+1; j<arr.length; j++) {
            if (arr[j] > arr[i]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
    console.log(arr[0], arr[arr.length-1]); //max min find karva mate
}

sortdes(arr);