// Write some code to take in a string and an array of strings, checking if they're anagrams

//? We need to get the character counts of the string
const characterCount = (string) => {
    const returnObject = {};
    for (const letter of string) {
        returnObject[letter] === undefined ? returnObject[letter] = 1 : returnObject[letter] ++;
    }
    return returnObject
 }

//? we need to check two character counts and return if they're equal
const checkForAnagrams = (characterMap1, characterMap2) => {
    for (const key in characterMap1) {
        if (characterMap1[key] !== characterMap2[key]) {
            return false
        }
    }
    return true
}

//? this will be our main function, taking a string and an array of strings to output an array of anagrams 
const isAnagram = (string, array) => {
    const matchingWords = [];
    const stringCount = characterCount(string);
    array.forEach((word) => {
        let wordFromArrayCharCount = characterCount(word);
        if (checkForAnagrams(stringCount, wordFromArrayCharCount)) {
            matchingWords.push(word);
        }
    })
    return matchingWords
}
test = isAnagram('sport', ['ports', 'strop', 'brandon']);


console.log(test);



