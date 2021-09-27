# Stable Sorting

Stabling sorting preserves the ordering of like sorted items.

> Is this sorting algorithm stable? To be considered a stable sort, the sort must guarantee that if two things are equal that that they stay in that same order.

For example, if we have an array of users that looks like this: `[{state: "CO", name: "Sarah Drasner"}, {state: "CA", name: "Shirley Wu"}, {state: "CA", name: "Scott Moss"}]` and we're sorting by **state**, we'd have to guarantee that Shirley comes before Scott for the sort to be considered stable.

**Sometimes this is important to you, sometimes you don't care**. For instance, Bubble sort is stable but would we care to preserve the original order of like paired elements?
