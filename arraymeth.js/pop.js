//Array.prototype.pop()

var fruits = ["Banana", "Orange", "Apple", "Mango","Kiwi", "Lemon", "Pineapple"];
document.getElementById("pops").innerHTML = fruits;

function myFunctions() {
    fruits.pop();
    document.getElementById("pops").innerHTML = fruits;
  }