

// take in two string, return true if its an anagram


const isAnagram = (str, str2) => {
    // fail fast
    if (str.length !== str2.length) {
        return false;
     }
    const characterMap = (str) => {
        let table = {};
        for (const character of str) {
            table[character] === undefined ? 
                table[character] = 1 : table[character] ++
       }
        return table
    }

    tableStr1 = characterMap(str);
    tableStr2 = characterMap(str2);
    for (const tableMapValue in tableStr1) {
        if (tableStr2[tableMapValue] !== tableStr1[tableMapValue]) {
            return false
        }
    }
    return true
}

console.log(isAnagram('bear', 'brae'));



