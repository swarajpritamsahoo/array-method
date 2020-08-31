//Array.prototype.every()

var ages = [32, 33, 16, 40];
document.write(ages);

function checkAdult(age) {
  return age >= 18;
}

function gFunction() {
  document.getElementById("heer").innerHTML = ages.every(checkAdult);
}