function LargestPrimeFactor(input) {
  this.input = input;
}
LargestPrimeFactor.prototype.number = function() {
  var i = Math.round(Math.sqrt(this.input))
  while (i > 2) {
    if (this.input % i == 0 && this.isPrime(i)) {
      return i;
    }
    i -= 1;
  }
};

LargestPrimeFactor.prototype.isPrime = function(num){
  i = 2;
  answer = true;
  while (i < Math.round(Math.sqrt(num))) {
    if (num % i == 0) {
      answer = false;
      break;
    }
    i += 1;
  }
  return answer;
};