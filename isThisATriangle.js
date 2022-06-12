function isTriangle(a,b,c)
{
  if(a < 0 || b < 0 || c < 0){
    return false}
  else{
let s = (a+b+c)/2
let x = (s*(s-a)*(s-b)*(s-c))
if(x>0){
  return true
}
  else{
    return false
  }
}
}