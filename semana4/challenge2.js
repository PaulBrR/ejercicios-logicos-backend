function isEqual(objInput1, objInput2) {
    //Implementación
    
    // con stringify importa el oreden de aparecion de casa elemento si tuvieramos dos
    // objetos iguales en contenido pero diferentes en orden esto daría false pese que es true
    
    if(JSON.stringify(objInput1) === JSON.stringify(objInput2)){
        return true;
    }

    return false;
}

module.exports = isEqual;