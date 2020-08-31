//Array.prototype.filter()

var ages = [32, 33, 16, 40];
document.write(ages);

function checkAdult(age) {
  return age >= 18;
}

function eFunction() {
  document.getElementById("jeer").innerHTML = ages.filter(checkAdult);
}