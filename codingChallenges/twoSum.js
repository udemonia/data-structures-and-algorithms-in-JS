
/*
?   Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

?   You may assume that each input would have exactly one solution, and you may not use the same element twice.

?   You can return the answer in any order.
*/

let twoSum = function(nums, target) {
  const result = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < nums.length; i++) {
    // eslint-disable-next-line no-plusplus
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i);
        result.push(j);
      }
    }
  }
  return result;
};

console.log(twoSum([2,7,11,15], 9))

/* 
!   Runtime: 116 ms, faster than 44.73% of JavaScript online submissions for Two Sum.
!   Memory Usage: 39.7 MB, less than 59.92% of JavaScript online submissions for Two Sum.
*/

const twoSumWindow = (array, target) => {
    let leftPointer = 0;
    let rightPointer = array.length - 1;
    
    while (leftPointer < rightPointer) {
        let currentValue = array[leftPointer] + array[rightPointer];
        if (currentValue === target){
            return [array[leftPointer], array[rightPointer]];
        }
        else if (currentValue < target) {
            leftPointer ++
        } else {
            rightPointer --
        }
    }
    return [-1,-1]
}


console.log(twoSumWindow([1,2,3,4,5,7], 9));









