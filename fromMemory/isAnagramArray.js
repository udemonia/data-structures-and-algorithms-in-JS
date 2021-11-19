
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
    let finalResult = [];
    const makeTable = (str) => {
        let table = {}
        for (const char of str) {
            table[char] === undefined ? table[char] = 1 : table[char] ++;
        }
    }
        
    const strTable = makeTable(str);

    const checkEquality = (obj1, obj2) => {
        for (const key in obj1) {
            if (obj1[key] !== obj2[key]) {
                return false
            }
        }
        return true
    }

    for (const element in array) {
        let arrElTable = makeTable(element)        
        let equal = checkEquality(strTable, arrElTable)
        if (equal === true) {
            finalResult.push(element);
        }
    }
    return finalResult;
}

console.log(isAnaTable('brae', ['bear', 'butt', 'head']))
