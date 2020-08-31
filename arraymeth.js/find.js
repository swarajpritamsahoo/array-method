//Array.prototype.find()

var ages = [3, 10, 18, 20];
document.write(ages);

function checkAdult(age) {
  return age >= 18;
}

function hFunction() {
  document.getElementById("haeir").innerHTML = ages.find(checkAdult);
}