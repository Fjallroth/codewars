function abbrevName(name){

    // code away
  //split string based on " " into array
  //take first string value of each array opject
  const newArray = name.split(" ");
  return (`${newArray[0].charAt(0).toUpperCase()}.${newArray[1].charAt(0).toUpperCase()}`)

}