//Array.prototype.reverse()

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("kezi").innerHTML = fruits;

function jFunction() {
  fruits.reverse();
  document.getElementById("kezi").innerHTML = fruits;
}