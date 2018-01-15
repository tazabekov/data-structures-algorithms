export default class BSTree {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert (value) {
        console.log("inserting", value);
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