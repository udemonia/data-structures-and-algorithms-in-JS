# Recursion in programming

A recursive program is one in which it calls itself.

Think of a recursive sentence definitions in English; i.e. a definition that invokes itself - what is a brown bear, a bear that is brown.

Example of a recursive function

```js
function countTo(max, current, list) {
  if (current > max) return;
  console.log(current);
  countTo(max, current + 1);
}

const counts = countTo(10, 1);
```
