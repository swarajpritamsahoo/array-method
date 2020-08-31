//Array.prototype.fill()

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("jeera").innerHTML = fruits;

function fFunction() {  
  document.getElementById("jeera").innerHTML = fruits.fill("Raaj");
}