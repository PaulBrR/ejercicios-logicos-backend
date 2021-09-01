const reverseString = (str) => {
    //Implementación
    if(typeof str !== "string"){
        throw new Error("Error: Tipo de dato o longitud no admitidos.");
    }else if( str.length <= 1 || str.length >15){
        throw new Error("Error: Tipo de dato o longitud no admitidos.");
    }
    
    return str.split("").reverse().join(""); // lo habria hecho con un split y un cliclo for pero encontre esta solución más optima,
                                            // el split lo separa en un arrego despues el reverse invierte todo el arreglo y
                                            // finalmente el join une en una sola cadena el arreglo.
    
}

module.exports = {
    reverseString
}