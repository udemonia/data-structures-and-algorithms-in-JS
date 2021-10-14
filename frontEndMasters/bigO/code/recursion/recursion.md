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

When is recursion useful?

If you find yourself defining your problem into smaller versions of the same problem.

_Have you ever heard of the fibonacci sequence_?

**A fibonacci number is a number that is defined as the sum of the previous two previous fibonacci numbers.** So fibonacci(3) is equal to fibonacci(2) + fibonacci(1). So the answer to fibonacci(100) is fibonacci(99) + fibonacci(98).

To generalize this, fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2). This is a recursively defined problem.

So let's tackle this one piece at a time.

The first question we have to ask ourselves is what is the **base case**.

In the countTo function in the example above, _the base case is_ `if (current > max) return`;

If we don't have a base case, then our recursion will spiral out of control and we will get a _stack overflow_ - simply, the stack exceeds our memory.

In our case, our base case is that we are given that fibonacci(2) = 1, fibonacci(1) = 1, and fibonacci(0) = 0. Almost always with recursion your base case will be the first line of your recursive function. You need a good reason for that not to be the case.
