function factorial(n=10) {
  if(n > 1) return n * factorial(--n);
  else return 1;
}

module.exports = factorial;
