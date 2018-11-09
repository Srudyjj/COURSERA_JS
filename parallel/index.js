/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {
    var results = [];

    var _i = 0;
    function _next(param) {
        return function (error, result) {
            if (error) {
                result = null
                return callback(error, result)
            } else {
                results[param] = result;
                _i += 1;

                if (_i === operations.length) {
                    return callback(error, results)
                }
            }
        }
    };

    for (let i = 0; i < operations.length; i++) {
        var next = _next(i);
        operations[i](next);
    }
};



