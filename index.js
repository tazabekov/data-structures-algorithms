import Stack from "./classes-es6/Stack.js";
import MinStack from "./classes-es6/MinStack.js";
import LinkedList from "./classes-es6/LinkedList.js";
import BSTree from "./classes-es6/BSTree.js";



var bst = new BSTree(10);

bst.insert(5);
bst.insert(12);
bst.insert(7);
bst.insert(3);

//bst.show();

bst.postOrderTraverse(console.log);