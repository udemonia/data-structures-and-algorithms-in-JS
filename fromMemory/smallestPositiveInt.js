// find the greatest positive int for a given array

const smallestPositiveInt = (A) => {
    // lets remove dupliacte numbers
    const set = new Set(A);

    let min = 1;
    while (set.has(min)){
        min ++
    }
    return min;
}


const smallest = smallestPositiveInt([0,1,2,3,4,5,6,7,78,78,76])

console.log(smallest)








