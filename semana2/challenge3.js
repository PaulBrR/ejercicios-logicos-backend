function arrayOfMultiples (num, length) {
let arrayMulti =[];
for (let i = 1; i <= length; i++) {
    arrayMulti.push(i*num);
}
return arrayMulti;
}

module.exports = arrayOfMultiples;