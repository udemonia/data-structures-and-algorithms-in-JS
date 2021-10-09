
const chalk = require('chalk');

const unsortedArray = [20,10,5,0]

const insertSort = (array) => {
    for(let i = 1; i < array.length; i++) {
        for (let j = i; j > 0; j--) {
            const numbersToCheck = [array[j - 1], array[j]]
            console.log(`Numbers to Check: ${chalk.magenta.bold.inverse(numbersToCheck)}`)
            if (array[j] < array[ j - 1 ]) {
                console.log(`need to swap = true 😀`)
                let temp = array[j];
                array[j] = array[j - 1]
                array[j - 1] = temp
            } else {
                break;
            }
        }
    }
    return array;
}

console.log(insertSort(unsortedArray))


/*
?   const unsortedArray = [20,10,5]

*       Numbers to Check: 20,10
*       need to swap = true 😀
*       Numbers to Check: 20,5
*       need to swap = true 😀
*       Numbers to Check: 10,5
*       need to swap = true 😀
*       [ 5, 10, 20 ]
*/

