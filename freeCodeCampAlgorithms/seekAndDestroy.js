
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

    const filteredArray = arr.filter((el) => {
        if (filterCheck.indexOf(el) === -1) {
            return el
        }

    })
    return filteredArray

  }

  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
