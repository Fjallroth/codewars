function squareSum(numbers){
  return numbers.map(x=> x**2).reduce(
    (previousValue, currentValue) => previousValue + currentValue, 0)
}git