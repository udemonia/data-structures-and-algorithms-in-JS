class Book {
    constructor(title, author) {
        this.title = title
        this.author = author
    }
    printBook() {
        console.log(`${this.title} by ${this.author}`);
    }
}


const JavaScriptDSA= new Book('JavaScript Data Structures and Algoritmns - Second Edition', 'Some Lady');

 
JavaScriptDSA.printBook() 

//---------------------------------------------------------------------
//! INHERITANCE ES6 
//---------------------------------------------------------------------


class TechBooks extends Book {
    constructor(title, author, technology) {
        super(title, author);
        this.technology = technology;
    }
    printTechnology() {
        console.log(this.technology);
    }
}

const myTechBook = new TechBooks('code','Brandon Lambert','JavaScript');

myTechBook.printBook();

myTechBook.printTechnology();

// getters and setters in JavaScript ES6
// Getters and Setters allow us to access an object's methods like a property


class Person {
    constructor(name) {
        this.name = name
    }
    get name() {
        return this._name
    }
    set name(value) {
        this._name = value 
    }
}


const Brandon = new Person('Brandon');

Brandon._name = 'PettersonMan'

console.log(Brandon.name)












