
// take in a string
// return out the letter which is used most... 

const maxChar = (str) => {
    let maxNumber = 0;
    let maxCharacter = '';
    // create a table
    const table = {};
    // iterate through the string, making a obj of counts
    for (const character of str) {
        table[character] === undefined ? 
                table[character] = 1
                : table[character] ++;
    }

    // interate through the table, updating max njm + max character
    for (const key in  table) {
        if (table[key] > maxNumber) {
            maxNumber = table[key];
            maxCharacter = key;
        }
    }
    return maxCharacter;
}


console.log(maxChar('bdfdfdfdfdfdfdfdfdfdfddddddddonlamberkkjt'));
