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

    deleteMin(p){
        var parent = p ? p: this;

        if (this.left) {
            this.left.deleteMin(this);
        } else {
            if (this.right) {
                parent.left = this.right;
            } else {
                parent.left = null;
            }
        }
    }

    deleteMax(p){
        var parent = p ? p: this;

        if (this.right) {
            this.right.deleteMax(this);
        } else {
            if (this.left) {
                parent.right = this.left;
            } else {
                parent.right = null;
            }
        }
    }

    inOrderTraverse (fn){
        if (this.left) this.left.inOrderTraverse(fn);
        fn(this.value);
        if (this.right) this.right.inOrderTraverse(fn);
    }

    preOrderTraverse (fn){
        fn(this.value);
        if (this.left) this.left.preOrderTraverse(fn);
        if (this.right) this.right.preOrderTraverse(fn);
    }

    postOrderTraverse (fn){
        if (this.left) this.left.postOrderTraverse(fn);
        if (this.right) this.right.postOrderTraverse(fn);
        fn(this.value);
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