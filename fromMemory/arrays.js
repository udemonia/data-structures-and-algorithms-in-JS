
const isEven = (x) => {
    return x % 2 === 0;
}




const thisArray = [1,2,3,4,5,6,7,8,9]

// adding an element to the end
thisArray.push(10);

/*
 *[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
 *]
 *
 */


// adding an element to the begging of an array
thisArray.unshift(0);

// removing the last element of an array 
thisArray.pop();

// removing an element from the begginging of an array
thisArray.shift();

// removing specific elements from an array
thisArray.splice(5,1); // 6 is removed

// adding elements into the array at a specific positon
thisArray.splice(5,1,6); // adding 6 back - can also take multiple values, 6,7,8.... etc..

thisArray.splice(6,0,7);

thisArray.splice(9,1,10);


console.log(thisArray)

// concating arrays!
const firstArray = [1,2,3]
const secondArray = [4,5,6]

const fullArray = firstArray.concat(secondArray);

console.log(fullArray);

const one =  ['b','r','a'];
const two = ['n'];
const three = ['d','o','n'];

const concatAllThree = one.concat(two, three);

// every

console.log(thisArray.every(isEven));
// some
console.log(thisArray.some(isEven));
// filter
console.log(thisArray.filter(isEven));
// map
console.log(thisArray.map(isEven));


// ES6  @@iterator
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

let iterator = numbers[Symbol.iterator]();

console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)

// CREATING A NEW ARRAY FROM AN EXISTING ONE
const numbers2 = Array.from(numbers);

console.log(numbers2)


let numbers3 = Array.of(1);

console.log(numbers3);

// copy WitinIn

let copyArray = numbers2.copyWithin(0, 4);

console.log('copyWithin', copyArray) 

//----------------------------------
//              SORTING
//----------------------------------

const unsortedArray = [6,5,4,7,8,3,99,34,27,84,73,1,0];

let rerversedArray = unsortedArray.reverse();

// reversse the array - doesn't sequentially sort
console.log(rerversedArray)

let sortedArray = unsortedArray.sort();


console.log('sorted array =>',sortedArray)


let sortedWithCompareFunction = unsortedArray.sort((a,b) => {
    return a-b
})

console.log('compare function - sort array method',sortedWithCompareFunction)

/*
 *          what I don't understand is - why doesn't array.sort use the int compare callback by defualt.....
 *          I thought it did.... 
 *          apparently, the sort method sorts lexographically; which is losley alphabetical - but alphabetical is really
 *          a type of lexographical sort.... this stuff is confusing 😳
 */

//                                          MORE ON sort(a,b) => a-b);
//          this code will return a negative number if b is bigger than a, a positive number if a is bigger than b and 0 if they're
//          even - the sort method then uses this to arrange the order of the elements within the mutated array
//

// sort(a,b) => a-b) in a more verbose way, would be functional to the below;
//
const compare = (a,b) => {
    if (a<b) {
        return -1 
    }
    if (a>b) {
        return 1 
    }
    else {
     return 0
    }
}

console.log('verbose compare', numbers2.sort(compare));


// supppose that we have object with name, age - in which, we want to sort by age....
let folks = [
    {name: 'brandon', age: 39},
    {name: 'brae', age: 16},
    {name: 'Kalvin', age: 6}
]

// Array Sort Dictionary Compare Function
const compareAge = (a,b) => {
    if (a.age < b.age) {
        return -1;
    }
    if (a.age > b.age) {
        return 1;
    }
    else {
        return 0;
    }
}

const sortedFolksByAge = folks.sort(compareAge);

console.log('sorted object by age!',sortedFolksByAge)

//                                  SORTING STRINGS

const stringsToSort = ['brandon', 'Kalvin', 'Braelynn', 'brock', 'annie', 'Annie'];

console.log('sorted strings with capital and lowercase', stringsToSort.sort());

// sorted strings with capital and lowercase [ 'Annie', 'Braelynn', 'Kalvin', 'annie', 'brandon', 'brock' ]


//              we can see here that the capital's got softed first, followed by the lowercase
//              the answer is that javascript compares each value according to its ASCII value

const compareToLowerCase = (a, b) => {
    if (a.toLowerCase() < b.toLowerCase()){
        return -1
    }
    if (a.toLowerCase > b.toLowerCase()){
        return 1
    }
    else {
        return 0
    }
}

console.log('to lowercase string compare',stringsToSort.sort(compareToLowerCase));

// to lowercase string compare [ 'Annie', 'annie', 'Braelynn', 'brandon', 'brock', 'Kalvin' ]

//                                                          Searching Arrays
//
//                                  We have two options, indexOf and lastIndexOf - both return the index of the element or
//                                  -1 if the elemeent isn't found within the array.

console.log('the index of 5 is ',numbers2.indexOf(5)); // 0 index

console.log('the index of 5 is ',numbers2.indexOf(100)); // -1

//                                  the find and find index methods
//


const longArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

const multipleOfFive = (element, index, array) => {
    return (element % 5 === 0) ? true : false
}

console.log('find multiples of five', longArray.find(multipleOfFive));




