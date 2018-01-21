// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Subscription {
    constructor({
        events,
        index,
        callback
    }){
        this.events = events;
        this.index = index;
        this.callback = callback;
    }

    release(){
        delete this.events[this.index];
    }
}

class Events {
    constructor(){
        this.events = {};
    }

    on(eventName, callback) {

        if (!this.events[eventName]){
            this.events[eventName] = [];
        }
        let index = this.events[eventName].length,
            sub = new Subscription({
                events: this.events[eventName],
                index,
                callback
            });

        this.events[eventName].push(sub);

        return sub;
    }

    // Trigger all callbacks associated
    // with a given eventName
    trigger(eventName, ...args) {
        if(this.events[eventName]){
            this.events[eventName].forEach(sub=>{
                sub.callback.call(sub, ...args);
            });
        }
    }

    // Remove all event handlers associated
    // with the given eventName
    off(eventName) {
        delete this.events[eventName];
    }
}

module.exports = Events;
