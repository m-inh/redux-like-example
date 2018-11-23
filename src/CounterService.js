let count = 0;
let listeners = {};

module.exports = {
    getCount: () => {
        return count;
    },
    setCount(_count) {
        count = _count;
        this.broadcast();
    },
    register: (key, cb) => {
        listeners[key] = cb;
    },
    unRegister: (key) => {
        delete listeners[key];
    },
    broadcast: () => {
        Object.keys(listeners).forEach(key => listeners[key](count));
    }
};