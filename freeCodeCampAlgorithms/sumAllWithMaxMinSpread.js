/*
*    We'll pass you an array of two numbers. 
*    Return the sum of those two numbers plus the sum of all the numbers between them. 
*    The lowest number will not always come first.
*    
*    For example, sumAll([4,1]) should return 10 
*    because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(array) {
    let sum = 0;
    for (let index = Math.min(...array); index <= Math.max(...array); index++) {
        sum += index
    }
    return sum;
  }
  
  sumAll([1, 4]);

  console.log(sumAll([10,100])) //* 5005