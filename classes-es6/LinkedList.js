class Node {
    constructor (value) {
        this.value = value;
    }
}

export default class LinkedList {
    constructor(value = new Node()){
        this.head = new Node(value);
        this.tail = this.head;
    }

    addToTail(val) {
        this.tail.next = new Node(val);
        this.tail = this.tail.next;
    }

    remove(val){
        if(this.head.value ===val){
            this.head = this.head.next;
        } else {
            var parent = this.head;

            var currNode = parent.next;
            while (currNode) {
                if (currNode.value === val) {
                    parent.next = currNode.next;
                    break;
                } else {
                    parent = currNode;
                    currNode = currNode.next;
                }
            }
        }


    }

    show(){
        var currNode = this.head,
            list = [];
        while (currNode) {
            list.push(currNode.value, currNode.next ? "-->":null);
            currNode = currNode.next;
        }
        console.log(list.join(''));
    }
}