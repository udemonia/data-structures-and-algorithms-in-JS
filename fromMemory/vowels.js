
// take in a string
// return out a count of the vowels


const countOfVowels = (str) => {
    const vowels = ['a','e','i','o','u'];
    let count = 0;
    for (const char of str) {
       if (vowels.indexOf(char) !== -1) {
            count ++
       } 
    }
    return count;

}
console.log(countOfVowels('brandonLambert'));


