// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let max = 0;
    let maxChar = '';
    const char = {};
    for (let character of str) {
        //! char[character] = char[character] +1 || 1;
        char[character] === undefined ? char[character] = 1 : char[character] ++
    }
    for (let key in char) {
        if (char[key] > max && key !== ' ') {
            max = char[key];
            maxChar = key
        }
    }
    return maxChar
}

console.log(maxChar('braelynn is a hot mess right now'))

module.exports = maxChar;
