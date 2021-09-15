function toArray(objectToArray) {
    //Implementación
    
    let arrayAux = [];
    let arrayReady = [];
    if(objectToArray){
         for(key in objectToArray ){
             arrayAux.push(key);
             arrayAux.push(objectToArray[key]);
            arrayReady.push(arrayAux);
            arrayAux = [];

         }
        return arrayReady;
    }
    return [];

}

module.exports = toArray;