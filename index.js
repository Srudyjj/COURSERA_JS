/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */

var friends = [
    {
        name: 'Сэм',
        gender: 'Мужской',
        email: 'luisazamora@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Эмили',
        gender: 'Женский',
        email: 'example@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Мэт',
        gender: 'Мужской',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Брэд',
        gender: 'Мужской',
        email: 'newtonwilliams@example.com',
        favoriteFruit: 'Банан'
    },
    {
        name: 'Шерри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Керри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Апельсин'
    },
    {
        name: 'Стелла',
        gender: 'Женский',
        email: 'waltersguzman@example.com',
        favoriteFruit: 'Картофель'
    }
];

function query(collection) {
    var _collection = collection || {};
    var params = Array.prototype.slice.call(arguments, 1);
    if (params.length) {
        for (let i = 0; i < params.length; i++) {
            _collection = params[i](_collection);
        }
        return _collection;
    } else {
        return _collection
    }
}

/**
 * @params {String[]}
 */
function select() {
    var params = Array.prototype.slice.call(arguments);

    return function select(collection) {
        return collection.map(function (row) {
            var _result = {}
            params.forEach(function (element) {
                if (row[element]) {
                    _result[element] = row[element];
                }
            });
            return _result
        });

    }
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {

}

var result = query();
console.log(result);
console.log(friends);
