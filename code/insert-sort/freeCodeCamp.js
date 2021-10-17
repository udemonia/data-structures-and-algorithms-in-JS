




const freeCodeCampExample = (array) => {
    for (let i = 1; i < array.length; i ++) {
        for (let j = i; j > 0; j --) {
            if (array[j] < array[j-1]) {
                let numToSwap = array[j];
                array[j] = array[j-1];
                array[j-1] = numToSwap
            } else {
                break;
            }
        }
    }
    return array
}

console.log(freeCodeCampExample([44, 33, 55, 665,3,3,4,56,5,]))