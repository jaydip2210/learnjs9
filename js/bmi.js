function handlesubmit() {
    let weight = parseInt(document.getElementById("weight").value);
    let height = parseInt(document.getElementById("height").value);

    let h;
    let bmi;

    h = height / 100;
    bmi = weight / (h * h);
    let ans = bmi;

    if (weight > 0 && weight < 150) {
        document.getElementById("wErr").innerHTML = '';
    } else {
        document.getElementById("wErr").innerHTML = 'Please enter your weight';
    }

    if (height > 0 && height < 300) {
        document.getElementById("hErr").innerHTML = '';
    } else {
        document.getElementById("hErr").innerHTML = 'Please enter your height';
    }


    if (ans > 17 && ans < 18.5) {
        document.getElementById("answer").innerHTML = "thin ness";
    } else if (ans > 18.5 && ans < 25) {
        document.getElementById("answer").innerHTML = "Normal";
    } else if (ans > 25 && ans < 30) {
        document.getElementById("answer").innerHTML = "Overweight";
    } else {
        document.getElementById("answer").innerHTML = "";
    }
    document.getElementById("bmi").innerHTML = ans;

    return false;
}