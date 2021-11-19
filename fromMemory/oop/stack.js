class Stack{
    constructor() {
        this.items = [];
    }
    pop() {
        if (this.items.length > 0) {
            return this.items.pop();
        }
    }
    push(value) {
        this.items.push(value);
    }
    size() {
        return this.items.length
    }
    peek() {
        return this.items.splice(-1)[0];
    }
    isEmpty(){
        return this.items.size === 0; 
    }
}

const BooksToReturn = new Stack();

BooksToReturn.push('huggie wuggie - had a bear!')

console.log(BooksToReturn.size())

console.log(BooksToReturn.peek());

console.log(BooksToReturn.isEmpty());

BooksToReturn.push('Brae is a Bear Bear - I no Care Care!')

console.log(BooksToReturn.peek());

