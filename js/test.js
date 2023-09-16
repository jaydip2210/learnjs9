function handlesubmit() {
    event.preventDefault();
    console.log("11");
    let product = document.getElementById("product").value;
    let description = document.getElementById("description").value;
    let price = document.getElementById("price").value;
    let discount = document.getElementById("discount").value;
    let coupon = document.getElementById("coupon").value;

    // console.log(product, description, price, discount, coupon);

    if (product === '') {
        document.getElementById("productErr").innerHTML = "Please enter your product";
    } else {
        let redexp = /^[a-zA-Z0-9 ]{2,30}$/;

        if (redexp.test(product)) {
            document.getElementById("productErr").innerHTML = " ";
            document.getElementById("pro").innerHTML = product;
        } else {
            document.getElementById("productErr").innerHTML = "Please enter valid product";
        }

        // document.getElementById("nameErr").innerHTML = " ";
    }

    if (description === '') {
        document.getElementById("descriptionErr").innerHTML = "Please enter your description";
    } else {
        let descriptionexp = /^(?=(?:[^\A-Za-z0-9]*[\A-Za-z0-9]){2})[~,?,!]*\S+(?: \S+){0,}$/

        if (descriptionexp.test(description)) {
            document.getElementById("descriptionErr").innerHTML = " ";
            document.getElementById("des").innerHTML = description;
        } else {
            document.getElementById("descriptionErr").innerHTML = "Please enter valid description";
        }

        // document.getElementById("nameErr").innerHTML = " ";
    }

    if (price === '') {
        document.getElementById("priceErr").innerHTML = "Please enter your price";
    } else {
        let priceexp = /^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/

        if (priceexp .test(price)) {
            document.getElementById("priceErr").innerHTML = " ";
            document.getElementById("pri").innerHTML = price;
        } else {
            document.getElementById("priceErr").innerHTML = "Please enter valid price";
        }

        // document.getElementById("nameErr").innerHTML = " ";
    }

    // if (discount === '') {
    //     document.getElementById("discountErr").innerHTML = "Please enter your discount";
    // } else {
    //     let discountexp = /^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/

    //     if (discountexp.test(discount)) {
    //         document.getElementById("discountErr").innerHTML = " ";
    //         document.getElementById("dis").innerHTML = discount;
    //     } else {
    //         document.getElementById("discountErr").innerHTML = "Please enter valid discount";
    //     }

    //     document.getElementById("nameErr").innerHTML = " ";
    // }


    if (discount === 'yes') {
        if(coupon === 'abc123') {
            discount = price * 0.10;
        } else if (discount === 'no') {
            discount = 0;
        }
    } else {
        discount = 0;
    }
















    // let discount1 = '';

    // if (coupon === 'abc123') {
    //     discount1 = price * 0.10
    // } else {
    //     discount1 = 0;
    // }
    // console.log(discount1);
    document.getElementById("dis").innerHTML = discount;

    document.getElementById("cop").innerHTML = coupon;

    return false;
}