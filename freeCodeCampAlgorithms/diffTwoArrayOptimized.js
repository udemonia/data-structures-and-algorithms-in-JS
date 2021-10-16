/*
*   JavaScript Algorithms and Data Structures
*   Intermediate Algorithm Scripting
*   Diff Two Arrays
*   Compare two arrays and return a new array with any items only found in one of the two given arrays, 
*   but not both. In other words, return the symmetric difference of the two arrays.
*   
*           Note: You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {
    const union = [];
    for (const el of arr1) {
        if (!union.includes(el)) {
            union.push(el)
        }
    }
    for (const el of arr2) {
        if (!union.includes(el)) {
            union.push(el)
        }
    }
    const symmetricDifference = [];
    for (const currentElement of union) {
        if (arr1.includes(currentElement) && !arr2.includes(currentElement)) {
            symmetricDifference.push(currentElement);
        } else if (arr2.includes(currentElement) && !arr1.includes(currentElement)) {
            symmetricDifference.push(currentElement)
        }
    }
    return symmetricDifference;
  }

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])) //! 4.

//*     with es6 there is an even easier way to get a union - we can use SET!!!!!!

function diffArraySet(arr1, arr2) {

    //? create a set from the two arrays....
    const union = new Set([...arr1, ...arr2]) //! Set(5) { 1, 2, 3, 5, 4 }
 
    const symmetricDifference = [];
    
    //? iterate through union and see if the element is in one array and not in the other...
    //? if yes - push to our return empty array...
    for (const currentElement of union) {
        if (arr1.includes(currentElement) && !arr2.includes(currentElement)) {
            symmetricDifference.push(currentElement);
        } else if (arr2.includes(currentElement) && !arr1.includes(currentElement)) {
            symmetricDifference.push(currentElement)
        }
    }
    return symmetricDifference;
  }

console.log(diffArraySet([1, 2, 3, 5], [1, 2, 3, 4, 5])) //! 4.

