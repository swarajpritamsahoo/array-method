//Array.prototype.unshift()

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("peer").innerHTML = fruits;

function mFunction() {
  fruits.unshift("Lemon", "Pineapple");
  document.getElementById("peer").innerHTML = fruits;
}