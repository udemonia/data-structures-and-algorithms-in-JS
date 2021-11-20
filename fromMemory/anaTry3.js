
const isAna = (str1, str2) => {
    let returnArray = [];

    // lets turn the array into char maps
    const charMapMaker = (str) => {
        let tempTable = {};
        for (const char of str){
            tempTable[char] === undefined ? tempTable[char] = 1 : tempTable[char] ++;
        }
        return tempTable;
    }
    
    let tt1 = charMapMaker(str1);
    let tt2 = charMapMaker(str2);

    const checkForEquality = (table1, table2) => {
        for (const key of table1) {
            if (table1[key] !== table2[key]) {
                return false;
            }
        }
        return true;
    };

    for (const key in tt1){
        if (tt1[key] !== tt2[key]) {
            return false;
        }
    }
    return true;
}

console.log(isAna('brae', 'dfdfdfr'))


