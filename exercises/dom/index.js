var first = document.querySelector("#first"),
    firstFound = document.querySelector("#firstFound"),
    second = document.querySelector("#second");

//console.log(first, firstFound, second);

var path = findPath(first, firstFound);
var secondFound = getNode(second, path);

// console.log(secondFound)
function findPath(root, node){
    var path = [],
        currNode = node;
    if (root === node || !node.parentNode) {
        return [0];
    }

    while (currNode && currNode != root) {
        let currNodeIndex = Array.from(currNode.parentNode.childNodes).indexOf(currNode);
        path.push(currNodeIndex);
        currNode = currNode.parentNode;
    }

    return path;
}

function getNode(root, path) {
    var currNode = root;
    while (path.length) {
        currNode = Array.from(currNode.childNodes)[path.pop()];
        //currNode.classList.add("red-border");
    }
    //currNode.classList.add("found");
    return currNode;
}