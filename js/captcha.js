let n1 = Math.floor(Math.random() * 10);
let n2 = Math.floor(Math.random() * 10);

document.getElementById("num1").innerHTML = n1
document.getElementById("num2").innerHTML = n2

let correctAns = n1 + n2;

// console.log(n1, n2, ans);


function handlesubmit() {
    console.log("handlesubmit");

    let uservalue = parseInt(document.getElementById("ans").value);
    
    if(uservalue == correctAns) {
        alert("Correct")
    } else {
        alert("Incorrect. Correct ans is." + correctAns)
    }

    return false;
}