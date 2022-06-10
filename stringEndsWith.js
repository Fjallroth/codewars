function solution(str, ending){
  let response = true
  for(let i=0; i<ending.length; i++)
    if(str[str.length-1-i] != ending[ending.length-1-i]){
      response = false
  }
  return response
}