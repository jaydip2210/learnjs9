function validateForm() {
    // console.log("aa");

    let name = document.contactForm.name.value;
    console.log(name);

    if (name === '') {
        document.getElementById("nameErr").innerHTML = "Please enter your name";
    } else {
        let redexp = /^[a-zA-Z ]{2,30}$/;

        if (redexp.test(name)) {
            document.getElementById("nameErr").innerHTML = " ";
        } else {
            document.getElementById("nameErr").innerHTML = "Please enter valid name";
        }

        // document.getElementById("nameErr").innerHTML = " ";
    }

    let email = document.contactForm.email.value;
    console.log(email);

    if (email === '') {
        document.getElementById("emailErr").innerHTML = "Please enter your email";
    } else {
        let emailReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (emailReg.test(email)) {
            document.getElementById("emailErr").innerHTML = " ";
        } else {
            document.getElementById("emailErr").innerHTML = "Please enter valid email";
        }

        // document.getElementById("emailErr").innerHTML = " ";
    }

    let mobile = document.contactForm.mobile.value;
    console.log(mobile);

    if (mobile === '') {
        document.getElementById("mobileErr").innerHTML = "Please enter your mobile naumber";
    } else {

        document.getElementById("mobileErr").innerHTML = " ";
    }

    let country = document.contactForm.country.value;
    console.log(country);

    if (country === country) {
        document.getElementById("countryErr").innerHTML = "Please select your country";
    } else {
        document.getElementById("countryErr").innerHTML = " ";
    }

    return false;
}