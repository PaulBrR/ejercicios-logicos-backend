function landMass(country, massCountry ) {
    //Implementación
    const totalMassEarth = 148940000;
    let totalPercentCountry= 0;
    let stringMessage="";

    totalPercentCountry = parseFloat(massCountry*100/ totalMassEarth).toFixed(2); // al parecer .toFixed(x) regresa un String y hay que volverlo a combertir en tipo Float
    totalPercentCountry= parseFloat(totalPercentCountry);
    stringMessage = `${country} representa el ${totalPercentCountry}% de la masa de la tierra`;

    return {message: stringMessage, percent: totalPercentCountry };
}

module.exports = landMass;