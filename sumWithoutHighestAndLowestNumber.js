function sumArray(array) {
//check if array is valid
  if(array == null || array.length < 2){
    return 0}
  else{
    let sortedArray = array.sort(function(a, b){return a-b});
    let ArrayWithoutHigh = sortedArray.pop();
    let ArrayWithoutLow = sortedArray.shift();
    let reducedArray = sortedArray.reduce(
      (previousValue, currentValue) => previousValue + currentValue, 0)
    return reducedArray
  }
}