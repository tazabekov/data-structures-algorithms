class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

export default class Tree {
    constructor(value){
        this.root = new TreeNode(value);
        this.leaves = [];
    }

    addNode() {

    }
}