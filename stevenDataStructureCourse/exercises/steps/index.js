// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


/*

?   J, Row ---------->

*   ________________________
*   |  #   |   _   |   _   | 
*   ________________________
*   |  #   |   #   |   _   | 
*   ________________________
*   |  #   |   #   |   #   | 
*   ________________________


! THINK OF THIS IN TERMS OF COLUMNS, ROWS
! FIND THE PATTERNS

* if the current column we're looking at is equal to or less than 

*/

function steps(n) {
    for (let row = 0; row < n; row ++) {
        let stair = '';
        for (let column = 0; column < n; column ++) {
            if (column <= row) {
                stair += '#'
            } else {
                stair += ' '
            }
        }
        console.log(stair)

    }
}

steps(5)

module.exports = steps;
