const reverseInt = (number) => {
    //Implementación
    if(typeof number !== "number"){
        throw new Error("Error: Tipo de dato o longitud no admitidos.");
    }
    if(number < 0){
        number=number*-1;
        number = parseInt(number.toString().split("").reverse().join(""),10); // aquí mismo revierto el entero de manera positiva
        return number=number*-1;
    }else {
        return parseInt(number.toString().split("").reverse().join(""),10) ;
    }
}

module.exports = {
    reverseInt
}