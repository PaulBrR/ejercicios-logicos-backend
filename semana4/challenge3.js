function isSpecialArray (specialArr) {

  if (specialArr.length < 2 ) {
    return false;
  }

  for (let index = 1; index < specialArr.length; index++) {
    if(index%2 === 0){
      if (specialArr[index]%2 !== 0) {
        return false;
      }
    }else{
      if (specialArr[index]%2 !== 1) {
        return false;        
      }
    }
  }
  return true;
}

module.exports = isSpecialArray;