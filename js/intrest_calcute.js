
function handlesubmit() {
    // console.log("111");
    // event.preventDefault();

    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let time = document.getElementById("time").value;
    let select = document.getElementById("select").value;

    // console.log(principal,rate,time,select);

    let ans;

    if (principal > 0 && principal < 1000) {
        document.getElementById("pErr").innerHTML = "";
    } else {
        document.getElementById("pErr").innerHTML = "Please enter valid principal.";
    }

    if (rate > 0 && rate < 100) {
        document.getElementById("rErr").innerHTML = "";
    } else {
        document.getElementById("rErr").innerHTML = "Please enter valid rate(%).";
    }

    if (time > 0 && time < 1000) {
        document.getElementById("tErr").innerHTML = "";
    } else {
        document.getElementById("tErr").innerHTML = "Please enter valid time.";
    }

    if (select === "0") {      
        document.getElementById("sErr").innerHTML = "Please enter valid m/y.";   
    } else {
        document.getElementById("sErr").innerHTML = "";
    }

    if(select === 'year') {
        ans = (principal * rate * time) / 100;
    } else if (select === 'month') {
        ans = (principal * rate * time) / 1200;
    }

    document.getElementById("disp").innerHTML = ans;

    // console.log(ans);
    return false;
}