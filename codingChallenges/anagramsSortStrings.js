const isAnagram = (string1, string2) => {
  const sortString = (string) => string.split('').sort().join('');
  const sorted1 = sortString(string1);
  const sorted2 = sortString(string2);

  return sorted1 === sorted2;
};

const findAnagrams = (string, array) => {
  const returnArray = [];
  array.forEach((word) => {
    if (word.length === string.length) {
      if (isAnagram(string, word)) {
        returnArray.push(word);
      }
    }
  });
  return returnArray;
};

const anagramsOfSport = findAnagrams('sport', ['ports', 'blahblah', 'fffff', 'storp']);

module.exports = anagramsOfSport;
