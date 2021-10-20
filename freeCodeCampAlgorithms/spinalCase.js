/*
*   Spinal Tap Case
*   Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/


//*-----------------------------------------
//*   Rules
//*   1. All Characters are lower case
//*   2. _ or ' ' turn into -
//*   3. Capital Case starts a new word...........
//?         this one is hard... Capital Case always determines the start of a new word but not all words start with capitals


let examplePhrase = "helloISthe_bestPhraseTo_hear_in_theMorning"

function spinalCase(str) {
  const words = [];
  let word = '';

  //Loop over the entire string... 
  for (const c of str){
    // underscore and spaces start new words
    if (c === ' ' || c === '_') {
      word.push(word);
      word = '';
    } else if (c >= 'A' && c <= 'Z' && !word.length) {
      // each character value has a ASCII value associated with it....
      word = c.toLowerCase();
    }  else if (c >= 'A' && c <= 'Z' && word.length) {
        //! upper case where word is not empty.... for instance thisIs - check is for I in Is
        words.push(word);
        // reset the word, w/ the current character to Lower case
        word = c.toLowerCase();
    } else {
      // we know we're not dealing with an upper case
    }
  }
  }
  
const a = spinalCase('This Is Spinal Tap');



function spinalCaseExample(str) {
    return str.toLowerCase().split(' ').join('-');
}

const b = spinalCase('This Is Spinal Tap');
// running tests
const c = spinalCase("thisIsSpinalTap") //!            should return the string this-is-spinal-tap.
const d = spinalCase("The_Andy_Griffith_Show") //!    should return the string the-andy-griffith-show.
const e = spinalCase("AllThe-small Things") //!       should return the string all-the-small-things.
// tests completed
