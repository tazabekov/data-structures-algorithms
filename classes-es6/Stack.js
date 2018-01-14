// LIFO concept
export default class Stack {
    constructor() {
        this.storage = [];
    }

    push(item) {
        this.storage.push(item);
    }

    pop(){
        this.storage.pop();
    }

    size() {
        return this.storage.length;
    }

    list() {
        return this.storage;
    }
}