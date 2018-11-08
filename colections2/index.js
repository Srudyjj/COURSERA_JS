module.exports = Collection;

function Collection() {
    this.data = [];
}

Collection.prototype.append = function (value) {
    if (value) {
        if (value instanceof Collection) {
            return this.data = this.data.concat(value.data);
        } else {
            return this.data.push(value);
        }
    }
};

Collection.prototype.count = function () {
    return this.data.length;
};

Collection.prototype.values = function () {
    return this.data
};

Collection.prototype.at = function (position) {
    if (this.data[position - 1]) {
        return this.data[position - 1]
    } else {
        return null
    }
};

Collection.prototype.removeAt = function (position) {
    if (this.data[position - 1]) {
        var self = this;
        this.data = this.data.filter(function (item) {
            return item !== self.data[position - 1]
        });
        return true
    } else {
        return false
    }
};


Collection.from = function (arr) {
    var _collection = new Collection();
    _collection.data = _collection.data.concat(arr);
    return _collection
};



