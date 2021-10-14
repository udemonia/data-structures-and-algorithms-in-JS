// quick sort algo using recursion

const unsortedArray = [1,2,3,4,66,45,4,4,56,6,4,54,345,345,654,54,4,4567,7654,34567,765432,3456,6754,567,76345,45,45,78,78,45,45,45,567,56,456,45,435,34,34,34,465,56,567,56,56,45,45,435,45,45,35,345,345,34,34,3434];

const quickSort = (array) => {

    if (array.length <= 1) {
        return array;
    }
    const pivotNumber = array[array.length -1];

    const leftSideArray = [];
    const rightSideArray = [];

    for (const el of array.slice(0, array.length -1)) {
        el < pivotNumber ? leftSideArray.push(el) : rightSideArray.push(el);
    }

    //? we need to handle 3 cases
    if (leftSideArray.length > 0 && rightSideArray.length > 0) {
        return [...quickSort(leftSideArray), pivotNumber, ...quickSort(rightSideArray)]
    } else if (leftSideArray.length > 0) {
        return [...quickSort(leftSideArray), pivotNumber]
    } else {
        return [pivotNumber, ...quickSort(rightSideArray)]
    }
}

const result = quickSort(unsortedArray);

console.log(result);