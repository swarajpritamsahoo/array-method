//Array.prototype.keys()

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fk = fruits.keys();

for (x of fk) {
  document.getElementById("seri").innerHTML += x + "<br>";
}