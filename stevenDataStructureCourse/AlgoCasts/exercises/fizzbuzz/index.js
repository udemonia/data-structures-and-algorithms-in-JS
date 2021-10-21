// --- Directions
// Write a program that console logs the is
// from 1 to n. But for multiples of three print
// “fizz” instead of the i and for the multiples
// of five print “buzz”. For is which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0 ) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    }
}

console.log(fizzBuzz(40))

module.exports = fizzBuzz;
