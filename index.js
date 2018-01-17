import Stack from "./classes-es6/Stack.js";
import MinStack from "./classes-es6/MinStack.js";
import LinkedList from "./classes-es6/LinkedList.js";
import BSTree from "./classes-es6/BSTree.js";



var bst = new BSTree(3);

bst.insert(5);
bst.insert(6);
bst.insert(7);


bst.show();

bst.deleteMin();

bst.show();

