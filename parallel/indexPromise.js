module.exports = function parallel(operations, callback) {
  var promisesList = operations.map(function promiseWrapper(operation) {
    return new Promise(function (resolve, reject) {
      return operation(function (error, result) {
        if (error) {
          return reject(error)
        } else {
          return resolve(result)
        }
      })
    })
  })

  Promise.all(promisesList)
    .then(function (result) {
      return callback(null, result)
    })
    .catch(function (error) {
      return callback(error, null)
    })
}