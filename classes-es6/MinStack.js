// LIFO concept
import Stack from "./Stack.js";

export default class MinStack extends Stack{
    constructor({
        storageType = "object",
        capacity = 10,
        count = 0
    } = {}) {
        super();
        this.storageType = storageType;
        this.capacity = capacity;
        this.count = count;
        this.min = new Stack(this);
        this.storage = this.storageType=="object" ? {} : [];
    }

    // O(1)
    push(item) {
        if (this.storageType=="object") {
            if (this.count+1 > this.capacity) {
                console.log(`Max stack capacity (${this.capacity}) reached!`);
                return;
            } else {
                if (this.min.peek() < item) {
                    this.min.push(this.min.peek());
                } else {
                    this.min.push(item);
                }
                this.storage[this.count++] = item;
                return this.count; // same as array's push: returns new length
            }
        } else {
            return this.storage.push(item);
        }
    }

    // O(1)
    pop(){
        this.min.pop();
        
        if (this.storageType=="object") {
            let val = this.storage[--this.count];
            delete this.storage[this.count];
            if (this.count < 0) {
                this.count = 0;
            }
            return val;
        } else {
            return this.storage.pop();
        }
    }

    peek() {
        if (this.storageType=="object") {
            return this.storage[this.count-1];
        } else {
            return this.storage[this.storage.length];
        }
    }

    size() {
        if (this.storageType=="object") {
            return this.count;
        } else {
            return this.storage.length;
        }
    }

    list() {
        return this.storage;
    }
}