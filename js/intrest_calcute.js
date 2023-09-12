
function handlesubmit() {
    // console.log("111");

    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let time = document.getElementById("time").value;
    let select = document.getElementById("select").value;

    // console.log(principal,rate,time,select);

    let ans;

    if(select === 'year') {
        ans = (principal * rate * time) / 100;
    } else if (select === 'month') {
        ans = (principal * rate * time) / 1200;
    }

    document.getElementById("disp").innerHTML = ans;

    // console.log(ans);
    return false;
}