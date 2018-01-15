import Stack from "./classes-es6/Stack.js";
import MinStack from "./classes-es6/MinStack.js";
import LinkedList from "./classes-es6/LinkedList.js";

var minStack = new MinStack({capacity: 3});
var myStack = new Stack({capacity: 1});
myStack.push("test1");
myStack.push("test2");

// console.log(myStack.list());
// console.log(myStack.size());
//
// console.log("pop:", myStack.pop());
// console.log(myStack.list());
//
// console.log(myStack.size());

var ll = new LinkedList("start");
ll.show();
ll.addToTail("second");
ll.addToTail(3);
ll.addToTail(4);
ll.addToTail(5);
ll.show();
ll.remove(4);
ll.show();
