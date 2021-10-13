// quick sort algo using recursion

const unsortedArray = [94,3,12,5,7,8,67,45,11,23,41,65];

//? this function will always take an array
const quickSort = (array) => {
    if (array.length === 1) {
        return array;
    }
    //? grab the pivot - last element
    const pivot = array[array.length -1];

    const leftArray = [];
    const rightArray = [];

    //? we will use array.length -1 so as to not include the pivot...
    for (let i = 0; array.length -1; i ++) {
        if (array[i] < pivot) {
            leftArray.push(array[i])
        } else {
            rightArray.push(array[i])
        }
    }

    //? we need to handle 3 cases
    //* 1. left Array is 0 and right Array is great 0
    if (leftArray.length > 0 && rightArray.length > 0) {
        return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
    //* 2. only Left Array is greater than 0
    } else if (leftArray > 0) {
        return [...quickSort(leftArray), pivot]
    //* 3. only right Array is great than 0 (only way we can get here :)
    } else {
        return [pivot, ...quickSort(rightArray)]
    }
}

const result = quickSort(unsortedArray);