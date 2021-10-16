/*
*    We'll pass you an array of two numbers. 
*    Return the sum of those two numbers plus the sum of all the numbers between them. 
*    The lowest number will not always come first.
*    
*    For example, sumAll([4,1]) should return 10 
*    because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

//? We're getting an array, will always be two numbers
//? The lowest number will not always come first....


const example = [3,4,5,6,7,8]

function sumAll(array) {
    //! Lets find the high and low number in the array....
    let minimum;
    let maximum;
    if (array[0] > array[1]) {
        minimum = array[1];
        maximum = array[0];
    } else {
        minimum = array[0];
        maximum = array[1];
    }
    //! initialize sum....
    let sum = 0;

    //! iterate from minimum up to and including maximum <= in the for loop
    for (let index = minimum; index <= maximum; index++) {
        //! add the
        sum += index
    }
    return sum;
  }
  
  sumAll([1, 4]);

  console.log(sumAll([10,100])) //* 5005