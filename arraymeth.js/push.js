//Array.prototype.push()

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("fruit").innerHTML = fruits;

function myFunction() {
  fruits.push("Kiwi", "Lemon", "Pineapple");
  document.getElementById("fruit").innerHTML = fruits;
}