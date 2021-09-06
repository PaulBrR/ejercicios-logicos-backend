const capitalizeLetters = (str) => {
    //Implementación
    str = str.split(" ");
    for (let i = 0; i < str.length; i++) {
        str[i]=str[i].split("");
        str[i][0]=str[i][0].toUpperCase();
        str[i]=str[i].join("");
    }
    
    let expresionRegular = /,/gi; // Expreción Regular para cambiar todas las comas
    return str.toString().replace(expresionRegular," ");// si uso "," solo me cambia la primera coma encontrada


}

module.exports = {
    capitalizeLetters
}