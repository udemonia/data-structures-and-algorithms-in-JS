

const nestedArray = [1, 2, 3, 4, 5, [6, 7, 8], 9, [[10, 11], 13, [14]]]

// we want to add all of the numbers in the array together using recursion...

function nestedAddArray(nestedArray){
    let sum = 0;
    for (let i = 0; i < nestedArray.length; i ++) {
        const current = nestedArray[i];
        //? This is the base case 
        if (Array.isArray(current)) {
            sum += nestedAddArray(current)
        // ? End Base Case
        } else {
            sum += current
        }
    }
    return sum

    // return a number at the end... 
}

console.log(nestedAddArray(nestedArray))