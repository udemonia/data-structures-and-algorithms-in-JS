
/*
*   JavaScript Algorithms and Data Structures
*   Intermediate Algorithm Scripting
*   Seek and Destroy

*   You will be provided with an initial array (the first argument in the destroyer function), 
*   followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*   
*   Note: You have to use the arguments object.
*/

//! Important to note, the first argument will always be an array.
//! then we will receive additional arguments - unknown amount, 
//! we need to removed the elements from the first argument array...

//! in the destroyer call, we'd want to remove 2 and 3 from the first argument's array...

function destroyer(arr, ...args) {

    const filterCheck = [...args];

    return arr.filter((el) => filterCheck.indexOf(el) === -1)

  }

console.log('Easier to Read...',destroyer([1, 2, 3, 1, 2, 3], 2, 3))
  


function destroyerOneLine(arr, ...args) {
    return arr.filter((el) => [...args].indexOf(el) === -1)
  }

console.log('One Line',destroyerOneLine([1, 2, 3, 1, 2, 3], 2, 3))
