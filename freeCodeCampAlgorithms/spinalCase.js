/*
*   Spinal Tap Case
*   Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
    return str.toLowerCase().split(' ').join('-')
  }
  
const result = spinalCase('This Is Spinal Tap');

console.log(result)




12345
function spinalCase(str) {
    return str.toLowerCase().split(' ').join('-');
}

spinalCase('This Is Spinal Tap');
// running tests
spinalCase("thisIsSpinalTap") //!            should return the string this-is-spinal-tap.
spinalCase("The_Andy_Griffith_Show") //!    should return the string the-andy-griffith-show.
spinalCase("AllThe-small Things") //!       should return the string all-the-small-things.
// tests completed