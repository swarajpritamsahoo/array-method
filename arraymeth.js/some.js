//Array.prototype.some()

var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

function bFunc() {
  document.getElementById("alpes").innerHTML = ages.some(checkAdult);
}