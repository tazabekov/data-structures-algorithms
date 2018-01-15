function Node(value) {
    this.value = value;
    this.next = null;
}

function LinkedList(value) {
    this.head = new Node(value);
    this.tail = this.head;
}

LinkedList.prototype.addToTail = function(val) {
    this.tail.next = new Node(val);
    this.tail = this.tail.next;
};

LinkedList.prototype.remove = function(val){
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
};