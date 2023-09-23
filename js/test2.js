function handlesubmit() {
    // console.log("111");

    let name = document.getElementById("name").value;
    let birth = document.getElementById("birth").value;
    let mobile = document.getElementById("mobile").value;
    let occupation = document.getElementById("occupation").value;
    let income = document.getElementById("income").value;
    let amount = document.getElementById("amount").value;
    let smoke = document.getElementById("smoke").value;
    console.log(income,amount,smoke);

    console.log(occupation);

    console.log(name, birth, mobile);

    let age = new Date(birth)
    let d = 2023 - age.getFullYear();
    console.log(d);

    let premium ;

    if(d > 18 && d < 25) {
        premium = 1000;
    } else if (d > 26 && d < 35) {
        premium = 1500;
    } else if (d > 36 && d < 45) {
        premium = 2000;
    } else if (d > 45) {
        premium = 2500;
    }

    console.log(premium);

    let ePremium;

    if (occupation === 'Self Employee') {
        ePremium = premium * 0.10;
    }
    console.log(ePremium);

    let insurance;

    if (income === "0_to_3") {
        if (amount > 100000 && amount < 5000000) {
            insurance =  amount;
        } else if (amount > "50Lakh") {
            insurance = "Please enter valid amount"
        } 
    } else if (income === "3_to_5") {
        if (amount > 100000 && amount < 10000000) {
            insurance =  amount;
        } else if (amount > "1Cr") {
            insurance = "Please enter valid amount"
        } 
    } else if (income === "3_to_5") {
        if (amount > "1Lakh" && amount < "1Cr") {
            insurance =  amount;
        } else if (amount > "1Cr") {
            insurance = "Please enter valid amount"
        } 
    }
    console.log(insurance);

    return false;
}