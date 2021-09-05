function divisibleByLeft(n) {
    //Implementación
    const numbers = n.toString().split("");
    let arrayConfirmationDiv = [false];
    for (let i = 0; i <  numbers.length; i++) {;
        numbers[i] = parseInt(numbers[i]);
    }
    for (let i = 1; i < numbers.length; i++) {
        if(Number.isInteger(numbers[i]/numbers[i-1])){
            arrayConfirmationDiv.push(true);
        }else {
            arrayConfirmationDiv.push(false);
        }
    }
    return arrayConfirmationDiv;
}

module.exports = divisibleByLeft;