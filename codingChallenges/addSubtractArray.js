// given an array containing arrays of two elements, add the fjrst and subtract the second from a total, return the total for the whole array
const addSubtract = (array) => {
    let total = 0;
    for (const thing of array) {
        total += thing[0];
        total -= thing[1]
    }
    return total
}

console.log(addSubtract([[10,0],[3,5],[5,8]]))


const addSubReduce = (array) => {
    return array.reduce((acc, [on, off]) => acc + on - off  , 0);
}


console.log(addSubReduce([[10,0],[3,5],[5,8]]))
