# Insert Sort

there are times where you'd actually use an insert sort over a better performing sort algorithm in production - _what do we mean by better performing?_ - a sort algorithm that's average case is better than the average case for insert sort.

Why? Because Insert Sorts best case could be better than another sorts best case - while its average case is worse.

As with Bubble Sort - the best case is an ordered array - if we're confident an array is ALMOST ordered already, it might be a good idea to implement insert sort to validate it and/or sort the small % of elements unsorted.

Sometimes, we will combine the sorts - start with an insert sort and if there are too many iterations, fall back to a quick sort algorithm
