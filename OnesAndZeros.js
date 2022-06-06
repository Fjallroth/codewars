const binaryArrayToNumber = arr => {
  let result = 0
  for(let i = arr.length-1; i >= 0 ; i--){
    result += arr[i]*(2**(arr.length-1-i))
  }
  return result
};