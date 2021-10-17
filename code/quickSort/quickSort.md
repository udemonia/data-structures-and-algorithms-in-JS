# Quick Sort

Quick sort is a recursive, divide and conquer sorting algorithm

for a good visual representation, check out the quick sort video by Computerphile

To achieve this, we will use a pivot number and separate everything that is higher than and lower than it into two separate sections..

We will do the above for each item until we can separate it any longer... so the size for each section/bucket is 1.

<https://www.youtube.com/watch?v=XE4VP_8Y0BU>

O(log n)

## Best Case

## Average Case

## Worst Case

## Implementing Quick Sort

- create an edge case - to break the recursion

> if (array.length === 1) { return array }

- use the index -1 as the pivot number

> const pivot = array[array.length -1]

- initialize two empty arrays

> const leftArray = []
> const rightArray = []

- for loop for array.length - 1

- if to push to left or right array if i is < or > pivot

```js
//? we will use array.length -1 so as to not include the pivot...
for (let i = 0; array.length - 1; i++) {
  if (array[i] < pivot) {
    leftArray.push(array[i]);
  } else {
    rightArray.push(array[i]);
  }
}
```
