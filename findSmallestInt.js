class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallNum = args[0];
    for(let i=0; i<args.length; i++){
      if(args[i]<smallNum){
        smallNum = args[i]
    }
  }
    return smallNum
}
}