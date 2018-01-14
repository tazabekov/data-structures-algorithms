// LIFO concept

var Stack = function () {
    this.storage = [];
};

Stack.prototype.push = function (item) {
    this.storage.push(item);
};

Stack.prototype.pop = function () {
    this.storage.pop();
};

Stack.prototype.size = function () {
    return this.storage.length;
};

Stack.prototype.list = function () {
    console.log(this.storage);
};