// FIFO

export default class Queue {
    constructor(){
        this.storage = [];
    }

    enqueue(val) {
        this.storage.push(val);
    }

    dequeue() {
        return this.storage.unshift();
    }
}