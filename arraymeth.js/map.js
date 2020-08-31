//Array.prototype.map()

var numbers = [6, 4, 1, 7];
var newarray = numbers.map(dFunction)

function dFunction(num) {
  return num * 2;
}


document.getElementById("seera").innerHTML = newarray;