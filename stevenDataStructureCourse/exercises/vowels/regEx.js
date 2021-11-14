

const countVowels = (str) => {
    // g = keep going after first match
    // i = insensitive - case insensitive 
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log(countVowels('kalvinLambert'))