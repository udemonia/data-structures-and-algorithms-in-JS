//? 

//? JS Interviews often ask you to implement a queue - even though the functionality of a queue is a subset of the functionality of an array.

//? A Nice intro to Data Structures

//? Waiting in line for a train, or a ticketing counter - FIFO

//? First in, first out - there is no skipping or cutting in line.


/*

!             ->  In [ record ] -> [ record ] -> [ record ] -> [ record ] -> Out

* Enqueue - Add 
! Dequeue - Remove
*/

//!!! Arrays come with a series of methods - typically when we implement an array within JS, we want to limit the methods that we can use.

//!!! We can use Array .push and .upshift to remove form the end and add to the beginning

class Queue {
    constructor() {
        this.queuedData = [];
    }

    enqueue(record) {
        this.queuedData.upshift(record)
    }

    dequeued() {
        if (this.queuedData.length === 0) {
            return null;
        }
        return this.queuedData.pop();
    }
}

const Q = new Queue();