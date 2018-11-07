module.exports = {
    events: {},
    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        this.events[event] = this.events[event] || [];
        this.events[event].push({ subscriber: subscriber, handler: handler })
        return this
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        if (this.events[event]) {
            var _subscribers = this.events[event].filter(function (row) {
                return row.subscriber !== subscriber
            });
            this.events[event] = _subscribers;
        }
        return this
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        this.events[event].forEach(function (row) {
            return row.handler.call(row.subscriber)
        })
        return this
    }
};


