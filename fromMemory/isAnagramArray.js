
const isAnagram = (str, array) => {
    let returnArray = [];

    const sortAnagram = (string) => {
        return string.split('').sort().join('')
    }

    const ana1 = sortAnagram(str);
    
    for (const element of array) {
        let ana2 = sortAnagram(element);
        console.log('ana1', ana1, 'ana2', ana2)
        if (sortAnagram(element) === ana1) {
            returnArray.push(element)
        }
    }
    return returnArray 
}

console.log(isAnagram('brae', ['bear', 'butt', 'head']))

// using tables --------


const isAnaTable = (str, array) => {
    let arrayReturn = [];

    let makeTable = (str) => {
        let tempTable = {};
        for (const char of str) {
            tempTable[char] === undefined ? tempTable[char] = 1 : tempTable[char] ++;
        }
        return tempTable
    }
    let strTempTable = makeTable(str);
    console.log(strTempTable);

    return arrayReturn;
}

