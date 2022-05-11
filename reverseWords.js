function reverseWords(str) {
  let wordRev = str.split(' ')
  let revArray = wordRev.map(x => x.split('').reverse().join(''))
  return revArray.join(' ')
}