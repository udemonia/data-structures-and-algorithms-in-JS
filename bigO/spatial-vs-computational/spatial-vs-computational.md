# Spatial vs Computational

lets focus on 'Better' - it maybe tempting to continually optimize every code block in a repository. The absolute wrong question to ask is

> how can this have the lowest Big O?

## Guiding Principles from FrontEnd Masters

- There are no rules. "Always do blank". Everything has context. These are just tools and loose decision-making frameworks for you to use to make a contextually good choice.

- Frequently, **there are multiple good choices and almost never a perfect, "right" choice**.

- Remember how I said that Big O allows you to ignore the coefficients (the 3 in the 3x²)? Sometimes those actually end up being super important. Big O, again, is just a broad stroke. Sometimes the details are super important.

- Just as frequently, even the broad strokes are super unimportant. If you have a function that is called just once a day as a background job, it doesn't matter if it finishes in 300 milliseconds or 30 seconds (probably, again, context is important.) Don't spin your wheels on unimportant things.

- In my experience, **readability and maintainability are the most important things about code**. Code is communication. Clever, performant code is fun to write but hard to maintain later when you have to go figure out what the hell you actually wrote. **We write code so that later humans can understand it and secondarily so computers can execute it**. If it was just for computers we'd all still be writing assembly. **Write your code like you were writing a letter to a future human (probably yourself) on how this works**.

- Taking the above into account, **err on the side of simple code**. Simple code is easier to maintain because you can understand it easier and typically ends up having less bugs.

- Keep in mind, **human time is almost always more valuable than computer time**. Why don't we spend all our time writing code in assembly or C... because the engineering time matters - JavaScript is easier to read/understand and maintain

- Normally **it's a good idea to not prematurely optimize code**. As a general principle, I try to have a performance problem before I try to solve it. Premature optimization will cause you a lot of problems. Frequently you're not solving the right problem and you're left [with] harder-to-deal-with code.

- 99% of the time you want to **use the built-in features** to a language **or an existing module** to do these sorts of heavy lifting. Rarely are you going to write your own sort, you'll just call .sort(). Usually your implementation won't be faster because the built-ins can do tricks you can't (like run it in C/Rust) and they tend to have far less bugs because so many people use them
