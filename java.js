function show(){
var x = parseInt(document.getElementById('name').value);
var y = parseInt(document.getElementById('name2').value);
var res = (x + y);

document.getElementById("demo").innerHTML = res;
}

function show1(){
var x = parseInt(document.getElementById('name').value);
var y = parseInt(document.getElementById('name2').value);
var res1 = (x - y);

document.getElementById("demo").innerHTML = res1;
}

function show2(){
var x = parseInt(document.getElementById('name').value);
var y = parseInt(document.getElementById('name2').value);
var res2 = (x * y);

document.getElementById("demo").innerHTML = res2;
}

function show3(){
var x = parseInt(document.getElementById('name').value);
var y = parseInt(document.getElementById('name2').value);
var res3 = (x/y);

document.getElementById("demo").innerHTML = res3;
}
