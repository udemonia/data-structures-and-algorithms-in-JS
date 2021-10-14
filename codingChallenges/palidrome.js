//*     Given an integer x, return true if x is palindrome integer.

//*     An integer is a palindrome when it reads the same backward as forward. 
//*     For example, 121 is palindrome while 123 is not.

const isPalindrome = (x) => {
    //* we need to reverse x and see if x reversed matches x
    return x.toString().split('').reverse().join('') === x.toString()
    
};

console.log(isPalindrome(121))
console.log(isPalindrome(345))
console.log(isPalindrome(454))
