


const anagrams = (str1, str2) => {

}

//! Function to get produce a return map of characters and their count;
const characterMap = (str) => {
    const returnMap = {};

    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        returnMap[char] === undefined ? returnMap[char] = 1 : returnMap[char]++;
    }

    return returnMap;
}

const isAnagram = (str1, str2) => {
    const map1 = characterMap(str1);
    const map2 = characterMap(str2);

    if (Object.key[map1].length !== Object.keys(map2).length) {
        return false
    }

    for (let key in map1) {
        if (map1[key] !== map2[key]) {
            return false
        }
    }
    return true
}

