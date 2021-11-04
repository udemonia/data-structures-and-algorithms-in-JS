// ?        Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
//?         determine if the input string is valid.
// ?        
// ?        An input string is valid if:
// ?        
// ?        Open brackets must be closed by the same type of brackets.
// ?        Open brackets must be closed in the correct order.


//! Example 1:

//! Input: s = "()"
//! Output: true
//! Example 2:

//! Input: s = "()[]{}"
//! Output: true
//! Example 3:

//! Input: s = "(]"
//! Output: false
//! Example 4:

//! Input: s = "([)]"
//! Output: false
//! Example 5:

//! Input: s = "{[]}"
//! Output: true


const isValid = function(s) {

    //? create an empty stack
    let stack = [];

    //? hash to make this faster
    let map = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    };

    for (let i =0; i < s.length; i++) {
        if (s[i] === '[' || s[i] === '(' || s[i] === '{') {
            stack.push(s[i]);
        } else if (s[i] === ']' || s[i] === '}' || s[i] === ')') {
            stack.pop()
        } else {
            return false
        }
    }
    return stack.length ? false : true

};

console.log(isValid('()'))