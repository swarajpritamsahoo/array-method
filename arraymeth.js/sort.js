//Array.prototype.sort()

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("bas").innerHTML = fruits;

function kFunction() {
  fruits.sort();
  document.getElementById("bas").innerHTML = fruits;
}