import Stack from "./classes-es6/Stack.js";

var myStack = new Stack({capacity: 1});
myStack.push("test1");
myStack.push("test2");

console.log(myStack.list());
console.log(myStack.size());

console.log("pop:", myStack.pop());
console.log(myStack.list());

console.log(myStack.size());