const bubble = (array) => {

    //* step 1
    let swapped = false
    let iterations = 1

    //* step 2 - create a do while loop
        //* as we need to run this at least one time
    do {
        swapped = false
        for (let i =0; i < array.length; i ++) {
            
            //* step three - check if i is greater than i + 1
            if (array[i] < array[i + 1]) {
                //* step four - if yes, flip the numbers

                //* step 5 store i in a variable
                let tempHolderForI = array[i]
                //* step 6 replace i w/ i + 1
                array[i] = array[i +1]
                //* step 7 replace i + 1 with i old variable
                array[i + 1] = tempHolderForI
                //* set swapped to true so we iterate through the array again
                //* we will keep iterating through the array until we have not swapped any numbers
                swapped = true
                iterations ++

            }
        }

    } while (swapped) {

    }

    return {array, iterations}
}

const mySimpleArray = [5,4,3,2,1,0]

const outcome = bubble(mySimpleArray)


console.log(outcome.array)
console.log(outcome.iterations)