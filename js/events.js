function handelonclick() {
    console.log('click');
}

function handelonmouseover() {
    document.getElementById("onmouseover").value;
    console.log('onmouseover')
}

function handelonmouseout() {
    document.getElementById("onmouseout").value;
    console.log('onmouseout')
}

function handelonmousedown() {
    document.getElementById("onmousedown").value;
    console.log('onmousedown')
}

function handelonmouseup() {
    document.getElementById("onmouseup").value;
    console.log('onmouseup')
}

function handelonmousemove() {
    document.getElementById("onmousemove").value;
    console.log('onmousemove')
}

function keydown() {
    let keydown = document.getElementById("keydown").value;
    console.log(keydown);
}

function keyup() {
    let keyup = document.getElementById("keyup").value;
    console.log(keyup);
}

function handelonfocus() {
    document.getElementById("onfocus").style.backgroundColor="aqua";
}

function handelonblur() {
    document.getElementById("onfocus").style.backgroundColor="white";
}

window.onload = function() {
    alert("loded");
}

window.onunload = function() {
    console.log("unload");
}

window.onresize = function() {
    console.log("resize");
}