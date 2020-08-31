//Array.prototype.reduce()

var numbers = [175, 50, 25];

document.getElementById("dalp").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}