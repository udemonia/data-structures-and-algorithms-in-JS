// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


//! When we're comparing character maps, one possible solution is to use a hash table or character map


const buildCharMap = (str) => {
    //! create a return character map
    const characterMap = {};

    //! loop through string, check if character is in character map and add it if its not - increment by 1 if it is
    for (let character of str.replace(/[^\w]/g, '').toLowerCase()) {
        characterMap[character] === undefined ? characterMap[character] = 1 : characterMap[character] ++;
    }

    return characterMap
}


function anagrams(stringA, stringB) {

    //! create two character maps
    const charMapA = buildCharMap(stringA);
    const charMapB = buildCharMap(stringB);

    //? check if the character maps length are the same
    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
        return false;
    }
    //? now, we should have the same sized character maps, lets compare the key/value pairs
    for (let char in charMapA) {
        if (charMapA[char] !== charMapB[char]) {
            return false;
        }
    }
    return true;
}

console.log(anagrams('rail safety', 'fairy tales'));
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
console.log(anagrams('Hi there', 'Bye there'));
console.log(anagrams('brandon', 'lambert!!!'));

module.exports = anagrams;

