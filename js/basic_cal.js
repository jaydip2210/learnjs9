function insert(val) {
    // console.log("insert");
    console.log(val);

    document.form1.textview.value =  document.form1.textview.value + val
}

function equal() {
    // console.log("aa");

    let exp = document.form1.textview.value;
    let res = eval(exp)

    document.form1.textview.value = res;
}

function backspace() {
    // console.log("aa");

    let exp = document.form1.textview.value;

    document.form1.textview.value = exp.substring(0, exp.length - 1)
    
}