document.querySelector(".demo").style.color="red"

price = 19.90;
tax = 0.20;
fullPrice = price +(price*tax)

alert("The result is " + fullPrice);

function alpha(name, age, address){
  name = "Daim"
  age= 23;
  address= "itpt"
}

 function name(){
   var firstname = "Daim";
   for (i = 0; i< 5; i++){
     x +=i;
   }
 }
 Condition
function(){
  x=3;
  y=6;
  z= 3;
 if(x<y){
   return true;
 }
 else if (x=3){
   return true
 }
else if(y=z){
  return false;
}
else{
  return false;
}

var str = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
var count = str.length;


var x = document.getElementById('name').value;
 document.getElementById('demo').innerHTML = str.length;


 function show(){
   var y = document.getElementById('name').value;
   var res = y.slice(56, 98);
   var z = res.toUpperCase();
 document.getElementById("demo").innerHTML = z;

  }
  function show1(){
    var y = document.getElementById('name').value;
    var res = y.slice(56, 98);
    var z = res.toLowerCase();
  document.getElementById("demo").innerHTML = z;

   }
