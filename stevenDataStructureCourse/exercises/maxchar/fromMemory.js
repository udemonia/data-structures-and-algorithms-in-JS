



function maxChar(str) {
    let max = 0;
    let maxChar = '';
    let table = {};
    for (let character of str) {
        table[character] === undefined ? table[character] = 1 : character[table] ++
    }
    for (let key in table) {
        if (table[key] > max) {
            max = table[key];
            maxChar = key
        }
    }
    return maxChar;
}

console.log(maxChar('thisisisisisthepersonwiththething'))