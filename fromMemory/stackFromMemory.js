// the issue w/ this apprach is its not private...

/*
If you have worked with any object-oriented language, 
you must know the importance of internal vs external interface. 
Internal interface refers to the methods and properties of a class 
that is only accessible by the class itself and not from outside. 
In contrast, the external interface has methods and properties that are also accessible from outside the class.
*/


// we can create some privacy with new WeakMap(); and using closure for declaring the items w/ in the class -
// the problem with this apprach is that you can't do inheritance...

class Stack{
    constructor() {
        this.items = [];
        this.count = 0;
    }
    pop() {
        if (this.items.length > 0) {
        this.items.pop()
        }
    }
    push(value) {
        this.items.push(value)
    }
    peek() {
        return this.items.slice(-1)[0]
    }
    size() {
        return this.items.length
    }
    isEmpty() {
        return this.items.length === 0;
    }
    clear() {
        return this.items = []
    }
}

const Books = new Stack() 

Books.push('Brandon\ns first book')
Books.push('Kals first book')
console.log(Books.size());
console.log(Books.peek())
console.log(Books.clear())



