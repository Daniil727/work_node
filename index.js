"use strict";

if(true){
let m = 2;
let n = 100;

function primeNumbers(m, n) {
  for (let i = m; i <= n; i++) {
    if (prime(i)) console.log(i);
  }
}

function prime(num) {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
primeNumbers(m, n);
}