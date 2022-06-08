function isPangram(string){
  let sentenceArray = string.toLowerCase().split('')
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  return alphabet.every(i=> sentenceArray.includes(i))
}