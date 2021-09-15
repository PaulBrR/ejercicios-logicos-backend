function mcm (a, b) {
  return minimoComunMultiplo(a , b );
}

const maximoComunDivisor = (a, b) => {
  let temporal; //Para no perder b
  while (b !== 0) {
      temporal = b;
      b = a % b; 
      a = temporal;
  }
  return a;
};
const minimoComunMultiplo = (a, b) => {
  return (a * b) / maximoComunDivisor(a, b); // Formula para calcular mcm  (a)(b)/mcd(a,b)
};

module.exports = mcm;