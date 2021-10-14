function bubbleSort(nums) {

    //  Sentinel variable
    let swapped = false;
    let iterations = 0;

    // the difference between a do and a while loop is w/ a do loop you'd want to run it at least once
    do {
        swapped = false
        iterations ++

        for (let i = 0; i < nums.length; i++) {

            // if the left element is > than the right element
            if (nums[i] > nums[i + 1]) {
                const temporary = nums[i];
                nums[i] = nums[i + 1];
                nums[i + 1] = temporary;
                swapped = true
            }
        }

    } while (swapped) {

    }
    return {nums, iterations};
}


const array = [1,2,5,4,3,5,7,45,3,3,2,4,65,7,78,8,8,4,4,5,6,6,4,4,4,6,6,66,78,3,4,67,78]

const result = bubbleSort(array)


console.log(result.nums)
console.log(`Completed in ${result.iterations} iterations`)

//*  💡 $node bubble-sort.js
//*  [
//*     1,  2,  2,  3,  3,  3, 3, 4,  4,
//*     4,  4,  4,  4,  4,  4, 5, 5,  5,
//*     6,  6,  6,  6,  7,  7, 8, 8, 45,
//*    65, 66, 67, 78, 78, 78
//*  ]

//* Completed in 24 iterations