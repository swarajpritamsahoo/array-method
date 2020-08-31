//Array.prototype.shift()

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demoo").innerHTML = fruits;

function yFunction() {
  fruits.shift();
  document.getElementById("demoo").innerHTML = fruits;
}