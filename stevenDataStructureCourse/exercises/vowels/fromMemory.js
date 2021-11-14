const vowel = (str) => {
    let count = 0;
    const vowels = ['a','i','e','o','u']
    for (const letter of str) {
        if (vowels.includes(letter)) {
            count ++
        }
    }
    return count;
}


console.log(vowel('brandon is the man'))

   
const regExVowels = (string) => {
    let matches = string.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log(regExVowels('brandon is the man'));

