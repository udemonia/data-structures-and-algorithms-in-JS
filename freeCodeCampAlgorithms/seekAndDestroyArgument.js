function destroyer(arr, ...args) {
    const argsArray = Array.from(arguments);
    const argsArraySpread = [...arguments].slice(1)  //! [ 2, 3 ]

    //! loop through the array - removing argsArraySpread values....

    const filteredArray = [];

    for (const el of arr) {
        if (!argsArraySpread.includes(el)) {
            filteredArray.push(el)
        }
    }

/*
    *   for (let index = 0; index < arr.length; index++) {
    *       if (!argsArraySpread.includes(arr[index])) {
    *           filteredArray.push(arr[index])
    *       }
    *   }
*/

    return filteredArray

  }

  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)) //? [ 1, 1 ]
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3); //? [ 1, 1 ]
