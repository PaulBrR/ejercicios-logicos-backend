function twoSums(numbs, target) {
    //Implementación
    //console.log(numbs);
    for (let i = 0; i < numbs.length; i++) {
        for (let j = 0; j < numbs.length; j++) {
            //console.log(j+".-  " + (numbs[i]+numbs[j]));
            if(i===j || i<j) continue; // Salto aquellas iteraciones que donde se sumaria el mismo numero y aquellos numero que ya fueron evaluados.
            if(numbs[i]+numbs[j] === target){
                //console.log("["+i+", "+j+"] ");
                return [i,j];
            }
        }
    }
}

module.exports = twoSums;