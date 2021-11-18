// stacks are LIFO
//
// Last in, First out

class Stack{
    constructor(){
        this.items = []
        this.count = 0;
    }
    push(value) {
        this.items.push(value);
        this.count ++;
    }
    pop(){
        if (this.count < 0) {
            this.count --
        }
        return this.items.pop();
    }
    size() {
        return this.count;
    }
    peek() {
        // slice(-1) -> [element]
        // slice(-1)[0] element
        // returns undefined if there isn't anything there
        // another way to do this would be return this.items[items.length -1]
        return this.items.slice(-1)[0];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    clear() {
        this.items = [];
    }

}


const stackOfBooks = new Stack();

stackOfBooks.push('Data Structures in JavaScript');

console.log(stackOfBooks.peek());
console.log(stackOfBooks.size())



