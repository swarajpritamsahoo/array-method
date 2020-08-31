//Array.prototype.splice()

var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
document.getElementById("seer").innerHTML = fruits;

function cFunction() {
  fruits.splice(2, 2);
  document.getElementById("seer").innerHTML = fruits;
}