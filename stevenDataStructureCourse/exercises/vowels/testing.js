


const maxChar = (str) => {
    let table = {};
    for (const letter of str) {
        table[letter] === null ? table[letter] = 1 : table[letter] ++;
    }
    return table
}


console.log(maxChar('ljak;sdfal;jkdfdjls'))