function Building(floors) {
    this.what="Building";
    this.floors = floors;

}

// to avoid creating functions for each created object
Building.prototype.countFloors = function () {
    console.log(`this house has ${this.floors} floors`);
};