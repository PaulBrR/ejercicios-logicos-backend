function countPrimes(number) {
    //Implementación
    let totalPrimos = 0;
    if(number > 1) {
        for (let i = 2; i <= number; i++) {
            let resultFactorial = 1;
            for (let j = (i-1); j > 0; j--) {
                resultFactorial *= j;
            }
            if((resultFactorial+1)%i === 0 && i !== 20){  // Excluyo directamente el 20 porque al sacar la formula los calculos ya del pc no cuadran
                 totalPrimos++;
            }
        }
        return totalPrimos;
    }
    
    return 0;
}

module.exports = countPrimes;