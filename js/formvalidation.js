function validateForm() {
    // console.log("aa");

    let name = document.contactForm.name.value;
    // console.log(name);
    let email = document.contactForm.email.value;
    // console.log(email);
    let mobile = document.contactForm.mobile.value;
    // console.log(mobile);
    let country = document.contactForm.country.value;
    // console.log(country);
    let gender = document.contactForm.gender.value;
    // console.log(gender);
    let hobby = document.contactForm.hobbies;
    // console.log(hobbies);

    let flag = false;

    for (let i=0; i<hobby.length; i++) {
        console.log(hobby[i].value, hobby[i].checked);

        if (hobby[i].checked) {
            flag = true;
            break;
        }
    }

    if (flag) {
        document.getElementById("hobbyErr").innerHTML = ""
    } else {
        document.getElementById("hobbyErr").innerHTML = "Please select Altist one hobby"
    }

  

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

  
    if (mobile === '') {
        document.getElementById("mobileErr").innerHTML = "Please enter your mobile naumber";
    } else {
        let mobileReg = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;

        if (mobileReg.test(mobile)) {
            document.getElementById("mobileErr").innerHTML = " ";
        } else {
            document.getElementById("mobileErr").innerHTML = "Please enter valid number";
        }

        // document.getElementById("mobileErr").innerHTML = " ";
    }

   
    if (country === "0") {
        document.getElementById("countryErr").innerHTML = "Please select your country";
    } else {
        document.getElementById("countryErr").innerHTML = " ";
    }

    if(gender === '') {
        document.getElementById("genderErr").innerHTML = "Please select your gender"
    } else {
        document.getElementById("genderErr").innerHTML = ""
    }

    return false;
}