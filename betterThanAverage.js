function betterThanAverage(classPoints, yourPoints) {
  const total = classPoints.reduce(
    (prevVal, currentVal) => prevVal + currentVal
  );
  let avePoints = total/classPoints.length
  if(yourPoints > avePoints){
    return true
  }
  else{
    return false
  }
}