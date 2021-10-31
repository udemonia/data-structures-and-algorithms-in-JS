# Recursion Basics

Recursion - Things to remember when building a recursive function

- Recursive code is inside a function

- Always determine a 'Base Case' - i.e. when you'll quite the recursive function, there is no more work to do, and return something... ( avoid forever loop)

- Change the input

- Call the function again with the updated input

```javascript
const steps = (n) => {
  if (n === 0) {
    return;
  }
  console.log(n);
  n--;
  steps(n);
};

steps(10);
```

## Potential Issues w/ Recursion

If we end up doing math and getting a NaN, we may not hit our base case, causing an infinite loop

Here, we're passing dec = 1 as a default to ensure we're passing an int. we could also check that typeof n = int. This would ensure that our base case will fire

```javascript
const printCountdown = (n, dec = 1) => {
  if (n <= 0) {
    return;
  }
  console.log(n);
  n -= dec;
  printCountdown(n);
};

printCountdown(20);
```
