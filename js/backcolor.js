const handlechange = () => {
    console.log("111");
    let countryName = document.getElementById("Country").value;

    if(countryName === 'in') {
        document.getElementById("body").style.backgroundColor = "orange";
    } else if(countryName === "uk") {
        document.getElementById("body").style.backgroundColor = "blue";
    } else if(countryName === "us") {
        document.getElementById("body").style.backgroundColor = "red";
    } else {
        document.getElementById("body").style.backgroundColor = "white";
    }
}