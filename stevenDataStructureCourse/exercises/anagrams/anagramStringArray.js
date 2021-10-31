

const characterMap = (string) => {
    const returnObject = {};
    for (const letter of string) {
        returnObject[letter] === undefined ? returnObject[letter] = 1 : returnObject[letter] ++;
    }
    return returnObject
}

const compareStrings = (obj1, obj2) => {
    for (const key in obj2) {
        if (obj2[key] !== obj1[key]) {
            return false
        }
    }
    return true
}

const isAnagram = (string, array) => {
    const returnArray = [];
    // take in a string and an array, 
    // find and return all the strings within the array that are an anagram of string
    const stringCharMap = characterMap(string);

    array.forEach(word => {
        const arrayWordCharMap = characterMap(word);
        if (compareStrings(stringCharMap, arrayWordCharMap)) {
            returnArray.push(word)
        }
    });

    return returnArray
}

console.log(isAnagram('brae', ['bear', 'bare', 'what?', 'who', 'howmany']));

