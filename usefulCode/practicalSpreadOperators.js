/*
?   USEFUL SPREAD OPERATOR USAGE

* Appending an array to another array....


*/
const chalk = require('chalk')

const odd = [1,3,5];
const combined = [2,4,6, ...odd]

console.log(combined) //!   [ 2, 4, 6, 1, 3, 5 ]


const what = [1,2,3];
const huh = [4,5,6]

const yup = [2, ...what, ...huh]

console.log(yup) //!    [ 2, 1, 2, 3, 4, 5, 6 ]

const timesTwo = (array) => {
    return array.forEach(element => {
        element * 2
    });
}

console.log('Times Two', timesTwo(what))

const takeInUnknownArgs = (a, ...args) => {
    console.log(a);
    for (let i =0; i < args.length; i ++) {
        console.log(`Arg ${i}: ${args[i]}`)
    }

}

takeInUnknownArgs(10, 22,3,4,4,45,6,6,56,45,7654);

/*
?   10
?   Arg 0: 22
?   Arg 1: 3
?   Arg 2: 4
?   Arg 3: 4
?   Arg 4: 45
?   Arg 5: 6
?   Arg 6: 6
?   Arg 7: 56
?   Arg 8: 45
?   Arg 9: 7654
*/

takeInUnknownArgs(10, 300,500,6543,'345t6y7');

/*
?   10
?   Arg 0: 300
?   Arg 1: 500
?   Arg 2: 6543
?   Arg 3: 345t6y7
*/


