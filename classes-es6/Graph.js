export default class Graph {
    constructor() {
        this.nodes = {};
    }

    addNode(val) {
        if (val===undefined) return;
        thsi.nodes[val] = this.nodes[val] || [];
    }

    addEdge(val1, val2) {
        if (!val1 || !val2) return;

        this.nodes[val1].push(val2);
        this.nodes[val2].push(val1);
    }
}