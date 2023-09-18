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
        if (document.getElementById("ans").value == uservalue) {
            alert("Correct")
        } else {
            alert("Incorrect. Correct ans is." + correctAns)
        }
        document.getElementById("ansErr").innerHTML = '';
    } else {
        document.getElementById("ansErr").innerHTML = 'Please enter answer.';
    }

    return false;
}