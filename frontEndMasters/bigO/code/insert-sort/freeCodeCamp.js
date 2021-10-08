
let array = [1,4,5,6,4,4,3,444,6,6,4,4765,664,234,4,64,234,45,75,387,5]

const insertSort = (array) => {
    for (let i = 1; i < array.length; i++) {
       for (let j = i; j < 0; j--) {
           if (array[j] < array[j-1]) {
               let temp = array[j]
               array[j] = array[j - 1]
               array[j - 1] = temp
           } else {
               break;
           }
       }
    }
    return array
}

console.log(insertSort(array))