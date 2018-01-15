export default class BSTree {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert (value) {
        //console.log("inserting", value);
        if (value < this.value) {
            if (this.left) {
                this.left.insert(value);
            } else {
                this.left = new BSTree(value);
            }
        } else {
            if (this.right) {
                this.right.insert(value);
            } else {
                this.right = new BSTree(value);
            }
        }
    }

    contains (value) {
        if (this.value === value) {
            return true;
        } else if (value < this.value && this.left) {
            return this.left.contains(value);
        } else if (value >= this.value && this.right) {
            return this.right.contains(value);
        } else {
            return false;
        }
    }

    show() {
        console.log(this.value);
        if(this.left) {
            console.log(`${this.value}'s left: `);
            this.left.show();
        }

        if(this.right) {
            console.log(`${this.value}'s right: `);
            this.right.show();
        }
    }
}