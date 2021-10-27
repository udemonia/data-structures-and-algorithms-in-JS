// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


//? create a return array
//? iterate through the input array
//? if the length of 

function chunk(array, size) {
    //
    const chunked = [];

    for (let element of array) {
        let last = chunked[chunked.length -1]
        if (!last || last.length === size) {
            chunked.push([element])
        } else {
            last.push(element)
        }

    }
    return chunked

}

console.log(chunk([3,4,5,56,6,65,6,5,345,6,7,7,3543,654,567,87,654], 4))

module.exports = chunk;
