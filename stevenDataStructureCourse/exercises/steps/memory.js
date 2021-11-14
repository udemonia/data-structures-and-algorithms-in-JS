const steps = (n, row = 0, stair = 0) => {
    if (n === row) {
        //quit once we we 
        return 
    }

    if (stair.length === n) {
        //! print the string 
        console.log(stair);
        //! call the function again
        //! increment row by 1, reset stair to ''
        return steps(n, row + 1);
    }

    stair.length <= row 
}



*__ (n3, r0)

