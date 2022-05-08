function oddOrEven(array) {
   if ((array.reduce((prevValue, currentValue) => prevValue + currentValue, 0))%2 != 0 && array != null){
     return 'odd'
   }
  else{
    return 'even'
  }
}