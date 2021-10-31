/*
!  Recursion - Things to remember when building a recursive function			
?   1	Recursive code is inside a function		
?   2	Always determine a 'Base Case' - i.e. when you'll quite the recursive function, there is no more work to do, and return something...  ( avoid forever loop)		
?   3	Change the input		
?   4	Call the function again with the updated input		
*/

const steps = (n, row = 0, stair = '') => {
    //! Whats my base case?
    if (n === row) {
        return;
    }

    //? check the stair values length
    if (stair.length === n) {
        console.log(stair)
        //? return because we don't want to do any other work within this iteration of the function
        return steps(n, row + 1); 
    }
    //? logic to determine if we're adding a # or a space
    stair.length <= row ? stair += '#' : stair += ' ';
    steps(n, row, stair)
}

steps(8)
