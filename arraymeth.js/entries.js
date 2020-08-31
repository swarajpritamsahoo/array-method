//Array.prototype.entries()

var veggies = ["Brinjal", "Potato", "Tomato", "ladyfinger"];
var f = veggies.entries();

for (x of f) {
    document.getElementById("demo").innerHTML += x + "<br>";
}