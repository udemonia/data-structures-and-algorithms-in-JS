
/*
*   JavaScript Algorithms and Data Structures
*   Intermediate Algorithm Scripting
*   Wherefore art thou

*   Make a function that looks through an array of objects (first argument) 
*   and returns an array of all objects that have matching name and value pairs (second argument). 
*   Each name and value pair of the source object has to be present in the object from the collection 
*   if it is to be included in the returned array.

!   For example, if the first argument is 
?   [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
?   and the second argument is { last: "Capulet" }, 

?   then you must return the third object from the array (the first argument), 
?   because it contains the name and its value, that was passed on as the second argument.
*/


function whatIsInAName(collection, source) {
    let arr = [];
    // Only change code below this line
    //* lets make an array of source's keys.

    const sourceKeys = Object.keys(source); //!  [ 'last' ]

    for (const collectionObject of collection) {
        let hasKey = true;
        for (const key of sourceKeys) {
            if (collectionObject[key]!== source[key]) {
                hasKey = false;
                break;
            }
        }
        if (hasKey === true) {
            arr.push(collectionObject)
        }
    }
  
  
    // Only change code above this line
    return arr;
  }
  
  const result = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  console.log(result)