//Array.prototype.reduceRight()

var numbers = [175, 50, 25];

document.getElementById("alpe").innerHTML = numbers.reduceRight(myFunc);

function aFunc(total, num) {
  return total - num;
}