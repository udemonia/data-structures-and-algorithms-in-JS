/*
*   JavaScript Algorithms and Data Structures
*   Intermediate Algorithm Scripting
*   Diff Two Arrays
*   Compare two arrays and return a new array with any items only found in one of the two given arrays, 
*   but not both. In other words, return the symmetric difference of the two arrays.
*   
*           Note: You can return the array with its elements in any order.
*/

//! so we have two arrays, we need to return just the unique elements
//! one way to handle this is to loop through the array, and add the element to a new 
//! array, if its not in the other array....


function diffArray(arr1, arr2) {
    const union = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!union.includes(arr1[i])) {
            union.push(arr1[i])
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!union.includes(arr2[i])) {
            union.push(arr2[i])
        }
    }
    const symmetricDifference = [];
    for (let i = 0; i < union.length; i ++) {
        const currentElement = union[i];
        if (arr1.includes(currentElement) && !arr2.includes(currentElement)) {
            symmetricDifference.push(currentElement);
        } else if (arr2.includes(currentElement) && !arr1.includes(currentElement)) {
            symmetricDifference.push(currentElement)
        }
    }
    return symmetricDifference;
  }
  
  

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])) //! 4.

// this one was actually harder than I'd have thought.....