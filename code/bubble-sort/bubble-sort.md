# Bubble Sort

Will never be used in production

It's a good first sorting algorithm to use because it aligns with the human mental model of 'sorting' pretty well

The algorithm is pretty simple: compare two items in an array that are next to each other.

If they're out of order (that is, the larger one comes first in the array) swap them.

Then move forward one index, compare again, swap if needed, and continue to the next item in the array.

Once we've reached the end of the array, **if we've swapped anything in the previous run through, the array could still be out of order,** so we have to pass through again.

Once we run through the whole array with no swaps, the array is sorted

> in the example below, 5 is the largest item - on each check, its going to move right, it'll _bubble_ to the top

```bash
[1, 5, 4, 2, 3]

Are 1 and 5 out of order? No.
Are 5 and 4 out of order? Yes. Swap.

[1, 4, 5, 2, 3]

Are 5 and 2 out of order? Yes. Swap.

[1, 4, 2, 5, 3]

Are 5 and 3 out of order? Yes. Swap.

[1, 4, 2, 3, 5]

End of the array, did we swap anything? Yes. Loop again.
Are 1 and 4 out of order? No.
Are 4 and 2 out of order? Yes. Swap.

[1, 2, 4, 3, 5]

Are 4 and 3 out of order? Yes. Swap.

[1, 2, 3, 4, 5] // technically sorted, because something swapped before, we have to go through it again

Are 4 and 5 out of order? No. // technically, superfluous

End of the array, did we swap anything? Yes. Loop again.
Are 1 and 2 out of order? No.
Are 2 and 3 out of order? No.
Are 3 and 4 out of order? No.
Are 4 and 5 out of order? No.
End of the array, did we swap anything? No. List is sorted.

```

as an optimization, on each pass through, we don't need to take stock of the last element of an array - the highest number is going to be on the end...

## Average Case

We're going to have an outer loop and an inner loop - leaving us with O(n2)

Every item in an array gets compared against every other item

## Worst Case

reverse sorted list would be the worst case

## Best Case

Sorted List O(1)

The Spatial Complexity is constant O(1)
