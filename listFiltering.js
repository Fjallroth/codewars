function filter_list(l) {
   let filteredArr = [];
  for (let i = 0; i < l.length; i++) {
    if ( typeof l[i] !== "string") {
      filteredArr.push(l[i])
    } 
  } return filteredArr
}