
// given a number n, retrun the number as a negative - even if the number is already negtaive 

const returnNegative = (n) => {
    return Math.abs(n) * -1;
}


console.log(returnNegative(500))

console.log(returnNegative(-500))
console.log(returnNegative(-3))
