function minMax(aNumbs) {
    //Implementación
    if(aNumbs.length <= 1){
        return false;
    }
    for (let i = 0; i < aNumbs.length; i++) {
        if( ! Number.isInteger(aNumbs[i])){
            return false
        }
    }

    aNumbs.sort(function(a,b){return a - b;}); // Ordenar arreglo del menor al mayor

    // let min= aNumbs[0], max = aNumbs[aNumbs.length-1]; // depues de ordenar el Arreglo se puede poner el primer elemento como el minimo y el ultimo elemento como el mayor
    // return {min , max}

    let min, max;

    min = aNumbs[0];
    max = aNumbs[0];

    for (let i = 0; i < aNumbs.length; i++) {
        if(!(min<aNumbs[i]) ){
            min=aNumbs[i];
        }
    }
    for (let i = 0; i < aNumbs.length; i++) {
        if(!(max>aNumbs[i]) ){
            max=aNumbs[i];
        }
    }


    return {min,max};
}

module.exports = minMax;