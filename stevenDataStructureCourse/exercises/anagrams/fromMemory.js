// Write some code to take in a string and an array of strings, checking if they're anagrams
const characterCount = (string) => {
    const returnObject = {};
    for (const letter of string) {
        returnObject[letter] === undefined ? returnObject[letter] = 1 : returnObject[letter] ++;
    }
    return returnObject
 }


 const isAnagram = (string, array) => {
     const matchingWords = [];
     const stringCount = characterCount(string);

     array.forEach((word) => {
         let wordFromArrayCharCount = characterCount(word);

         for (const key in wordFromArrayCharCount) {
             if (stringCount[key] !== wordFromArrayCharCount[key]) {
                 return false;
             } else {
                 matchingWords.push(word);
             }
         }
         return matchingWords;
     })
 }


test = isAnagram('sport', ['ports', 'strop', 'brandon']);


console.log(test);