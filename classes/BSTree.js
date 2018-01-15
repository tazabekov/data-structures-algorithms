function BSTree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

BSTree.prototype.insert = function (value) {
    if (value >= this.value) {
        if (this.right) {
            this.right.insert(value);
        } else {
            this.right = new BSTree(value);
        }
    } else {
        if (this.left) {
            this.left.insert(value);
        } else {
            this.left = new BSTree(value);
        }
    }
};

BSTree.prototype.contains = function(value) {
    if (this.value === value) {
        return true;
    } else if (value < this.value && this.left) {
        return this.left.contains(value);
    } else if (value >= this.value && this.right) {
        return this.right.contains(value);
    } else {
        return false;
    }
};

BSTree.prototype.show = function() {
    console.log(this.value);
    if(this.left) {
        console.log(this.value+"'s left: ");
        this.left.show();
    }

    if(this.right) {
        console.log(this.value+"'s right: ");
        this.right.show();
    }
};

var bst = new BSTree(10);
bst.show();
bst.insert(5);
bst.insert(12);
bst.insert(7);
bst.insert(3);


bst.show();