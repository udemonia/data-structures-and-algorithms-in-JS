const chunked = (array, size) => {
    const returnArray = [];
    let index = 0;
    while (index < array.length) {
        returnArray.push(array.slice(index, size + index));
        index += size;
    }
    return returnArray;
}

console.log(chunked([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));


const chunkedTwo = (array, size) => {
    const returnArray = [];
    let index = 0;

    for (const element of array) {
        if (index < array.length) {
            returnArray.push(array.slice(index, index + size));
            index += size;
        }
    }
    
    return returnArray;
}

console.log(chunkedTwo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));