# Node REPL output

Learning algorithms is hard, yet fun... one way to ensure I'm learning them is to use the Node REPL - its unforgiving. No predictive text, syntax highlighting, error underlining etc.

This is interesting, I accidentally inverted the logic and return a reverse sorted array....

> if (array[j] > array[j-1]) vs if (array[j] <> array[j-1])

```js
> let insert = (array) => {
... for (let i = 1; i < array.length; i++) {
..... for (let j = i; j > 0; j--) {
....... if (array[j] > array[j-1]) {
......... temp = array[j]
......... array[j] = array[j-1]
......... array[j-1] = temp
......... }
....... }
..... }
... return array
... }

> console.log(insert(unsorted))
[
  433, 5, 5, 4,
    4, 4, 3
]

> let insert2 = (array) => {
... for (let i = 1; i < array.length; i ++) {
..... for (let j = i; j > 0; j--) {
....... if (array[j] < array[j-1]) {
......... temp = array[j]
......... array[j] = array[j-1]
......... array[j-1] = temp
......... }
....... }
..... }
... return array
... }

> console.log(insert2(unsorted))
[
  3, 4,   4, 4,
  5, 5, 433
]
```
