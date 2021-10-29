// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    return Number(Math.abs(n)
        .toString().split('')
        .reduce((acc, char) => char+acc, '') * Math.sign(n))
}

console.log(reverseInt(345))
console.log(reverseInt(-345))

module.exports = reverseInt;
