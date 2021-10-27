const chunked = (array, size) => {
    const chunkedArray = [];
    let index = 0;
    while (index < array.length) {
        chunkedArray.push(array.slice(index, index + size))
        index += size
    }
    return chunkedArray
}

console.log(chunked([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))