function keysAndValues(objInput) {
    //Implementación
    let arrayKeys = [];
    let arrayValues = [];

    for( index in objInput){
        arrayKeys.push(index);
    }

    arrayKeys.sort();

    for (let index = 0; index < arrayKeys.length; index++) {
        // recorrer el objeto original y el key igual a al valor de arrayKeys
        // mandarlo al arreglo de values
        for( key in objInput ){
            if ( arrayKeys[index] === key) { 
                arrayValues.push(objInput[key])
                break;
            }
        }
    }
    return [arrayKeys,arrayValues];
}

module.exports = keysAndValues;