function prevNextPrime(num) {
  let prevPrime = 0;
  let nextPrime = 0;
  for (let i = num; i >= 2; i--) {
    if (isPrime(i)) {
      prevPrime = i;
      break;
    }
  }

  for (let i = num; i < Infinity; i++) {
    if (isPrime(i)) {
      nextPrime = i;
      break;
    }
  }
  return `Current Number ${num} => Previous Prime Number ${prevPrime}, Next Prime Number ${nextPrime}`;
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  if (num === 2 || num === 3) {
    return true;
  }

  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  for (let i = 5; i < Math.sqrt(num); i += 6) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(prevNextPrime(4));
console.log(prevNextPrime(9));
console.log(prevNextPrime(20));
console.log(prevNextPrime(37));
