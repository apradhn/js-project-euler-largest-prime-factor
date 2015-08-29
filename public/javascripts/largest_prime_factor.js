function largestPrimeFactor(input) {
  var i = Math.round(Math.sqrt(input))
  while (i > 2) {
    if (input % i == 0 && isPrime(i)) {
      return i;
    }
    i -= 1;
  }
}

function isPrime(num) {
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
}