var StorageContainer = /** @class */ (function () {
    function StorageContainer() {
        this.contents = [];
    }
    StorageContainer.prototype.addItem = function (item) {
        this.contents.push(item);
    };
    StorageContainer.prototype.getItem = function (idx) {
        return this.contents[idx];
    };
    return StorageContainer;
}());
var username = new StorageContainer();
username.addItem('Othman');
username.addItem('Ahmad');
console.log(username.getItem(0));
var scores = new StorageContainer();
scores.addItem(13);
scores.addItem(29);
console.log(scores.getItem(0));
