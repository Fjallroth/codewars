function DNAStrand(dna){

  function dnaSwapper(t){
    if(t == "A"){
      return "T"
    }
    else if (t == "T"){
      return "A"
    }
    else if (t == "C"){
      return "G"
    }
    else if (t == "G"){
      return "C"
    }
    else{
      return t
    }
  }
  let dnaArray = dna.split("")
  let compArray = dnaArray.map(x => dnaSwapper(x))
  return compArray.join("")

}