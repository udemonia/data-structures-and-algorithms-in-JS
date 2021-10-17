function whatIsInAName(collection, source) {
    let arr = [];
    const sourceKeys = Object.keys(source); //!  [ 'last' ]
    return collection.filter(obj => {
      return keys.reduce((acc, key) => {
        if (obj[key] !== source[key]) {
          return false
        }
        return acc;
      }, true)
    })
  }
  
  const result = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  console.log(result)