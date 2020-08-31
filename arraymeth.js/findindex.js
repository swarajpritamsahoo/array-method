//Array.prototype.findIndex()

var ages = [3, 10, 18, 20];


function checkAdult(age) {
  return age >= 18;
}

function iFunction() {
  document.getElementById("pre").innerHTML = ages.findIndex(checkAdult);
}