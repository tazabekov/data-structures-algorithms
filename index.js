import Stack from "./classes-es6/Stack.js";

var myStack = new Stack();
myStack.push("test1");
myStack.push("test2");

console.log(myStack.list());

myStack.pop();
console.log(myStack.list());



