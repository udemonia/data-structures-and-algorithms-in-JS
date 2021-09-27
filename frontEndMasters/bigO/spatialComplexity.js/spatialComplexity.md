# Spatial Complexity

In general, when someone talks about BigO without specifying, they're referring to computational complexity; i.e. how long does something take to run... or more how does the input impact how long something takes to run

There is also _spatial complexity_ - how much RAM or disk space does an algorithm need in order to run?

## Linear

Let's say we have an algorithm that for every item in the array, it needs to create another array in the process of sorting it. So for an array of length 10, our algorithm will create 10 arrays. For an array of 100, it'd create 100 extra arrays (or something close, remember these are broad strokes, not exact.) This would be O(n) in terms of its spatial complexity. We'll do some sorts that do this.

## Logrithmic

What about another for every item in the array, it needed to create a diminishing amount of extra arrays. For example: for an array of length 10, it'd create 7 arrays. For an array of 100, it'd create 12 arrays. For an array of 1000, it'd created 20 arrays. This would be O(log n).

## Constant

What if we didn't create any extra arrays when we did our algorithm? We just used the same space we were given when we first started. Or if we created just 10 arrays, no matter how long the array is? This would be O(1) since it's constant no matter what. Its spatial need don't increase with longer arrays.

## Quadratic

Lastly, what if we had an app that calculates the distances between zip / postal codes?

What's is distance between 98109 and 10001, we'd spit out something like x miles or ykm.

If for every zip code in a state, we calculate the distance between every other zip code in our system and store it.

With 10 zip codes, that'd be easy, but there are nearly 42k zip codes in the United States and the number is increasing.

The **spatial complexity on this would be O(n²)** - for every zip code we add, we'd have to add 42k calculations.

> Is this a good idea? It depends! A company I used to work at did exactly this because calling the API to get this data was really expensive so they did all the computational work once to find out and just stored it. It was a huge database but that ended up being way cheaper than the API.

**O(n²) in spatial complexity is pretty rare and a big red flag.**

## Trade Offs

One isn't necessarily better than the other. We have to think about trade offs _computational complexity_ vs _spatial complexity_

Some algorithms will eat memory but computer quicker and some eat no memory but calculate slowly. The choice should be informed by our needs.

### Trade Off Examples

RAM wins!

> let's say you're writing code that's going to be run on a PlayStation 3 and it needs to sort 1000 TV shows according to what show you think the customer is going to want to see. PS3s have a decent processor but very little memory available to apps. In this case, we'd want to trade off in favor of spatial complexity and trade off against computational complexity: the processor can do more work so we can save memory.

Computation Wins

> Okay, now same problem but we have 1,000,000 videos and a big, beefy server in the cloud to do the work for us. In this case we're not resource constrained by either memory or compute so we can feel free to trade off in favor of computational since we want to respond to the user as soon as we can.
