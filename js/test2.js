function handlesubmit() {
    // console.log("111");

    let name = document.getElementById("name").value;
    let birth = document.getElementById("birth").value;
    let mobile = document.getElementById("mobile").value;
    let occupation = document.getElementById("occupation").value;
    let income = document.getElementById("income").value;
    let amount = document.getElementById("amount").value;
    let smoke = document.form.smoke.value;
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
    } else if (occupation === 'Salaried') {
        ePremium = 0;
    }
    console.log(ePremium);

    let insurance;

    if (income === "0_to_3") {
        if (amount > 100000 && amount <= 5000000) {
            insurance =  amount;
        } else if (amount > 5000000) {
            // insurance = "Please enter valid amount"
            document.getElementById("error").innerHTML = "Please enter valid amount"
        } 
    } else if (income === "3_to_5") {
        if (amount > 100000 && amount <= 10000000) {
            insurance =  amount;
        } else if (amount > 10000000) {
            // insurance = "Please enter valid amount"
            document.getElementById("error").innerHTML = "Please enter valid amount"
        } 
    } else if (income === "5_to_10") {
        if (amount > 100000 && amount <= 15000000) {
            insurance =  amount;
        } else if (amount > 15000000) {
            // insurance = "Please enter valid amount"
            document.getElementById("error").innerHTML = "Please enter valid amount"
        } 
    } else if (income === "Above_10") {
        if (amount > 100000 && amount <= 20000000) {
            insurance =  amount;
        } else if (amount > 20000000) {
            // insurance = "Please enter valid amount"
            document.getElementById("error").innerHTML = "Please enter valid amount"
        }
    }
    console.log(insurance);

    let sPremium;

    if (smoke === "yes") {
        sPremium = ePremium + premium * 0.20;
    } else if (smoke === 'no') {
        sPremium = 0;
    }
    console.log(sPremium);

    let finalPremium = premium + ePremium + sPremium;

    document.getElementById("n").innerHTML = name;
    document.getElementById("a").innerHTML = d;
    document.getElementById("m").innerHTML = mobile;
    document.getElementById("ia").innerHTML = insurance;
    document.getElementById("p").innerHTML = finalPremium;

    document.getElementById("disp").style.display = 'block';

    return false;
}