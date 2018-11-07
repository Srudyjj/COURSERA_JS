function query(collection) {
    /**
     * @param {Array} collection
     * @params {Function[]} – Функции для запроса
     * @returns {Array}
    */
    var _collection = collection || {};
    if (arguments.length > 1) {
        var _newCollection = {};
        // Configuration parameters in _sortParameters ["filterIn", "select"]
        var _sortedParameters = _sortParameters(arguments, ["filterIn", "select"])
        for (var i = 0; i < _sortedParameters.length; i++) {
            _newCollection = _sortedParameters[i](_collection);
            _collection = _newCollection;
        }
    } else {
        return _collection
    }
    return _collection
};

function select() {
    /**
     * @params {String[]}
    */
    var params = Array.prototype.slice.call(arguments);
    return function select(collection) {
        return collection.map(function (row) {
            var _result = {};
            params.forEach(function (element) {
                if (row[element]) {
                    _result[element] = row[element];
                }
            });
            return _result
        });
    }
};

function filterIn(property, values) {
    /**
     * @param {String} property – Свойство для фильтрации
     * @param {Array} values – Массив разрешённых значений
    */
    return function filterIn(collection) {
        return collection.filter(function (row) {
            var _trigger = false;
            values.forEach(function (value) {
                if (row[property] === value) {
                    _trigger = true;
                };
                return _trigger
            });
            return _trigger;
        });
    }
};

function _functionFilter(colection, name) {
    return colection.filter(function _filter(func) {
        return func.name === name;
    });
};

function _sortParameters(outerArguments, names) {
    var params = Array.prototype.slice.call(outerArguments, 1);
    var _newParams = [];
    names.forEach(function (name) {
        var _tempParams = _newParams.concat(_functionFilter(params, name));
        _newParams = _tempParams;
    });
    return _newParams
};

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};

