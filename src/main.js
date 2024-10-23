'use strict';

class EventManager {
    handlers = {};

    on(eventName, eventHandler) {
        if(Array.isArray(this.handlers[eventName])) {
            this.handlers[eventName].push(eventHandler)
            return;
        }
        this.handlers[eventName] = [eventHandler];
    }

    off(eventName, eventHandler) {
        if(!this.handlers[eventName]) return;
        const index = this.handlers[eventName].findIndex((existingHandler) => {
            return  existingHandler === eventHandler
        });
        this.handlers[eventName].splice(index, 1);
    }

    trigger(eventName) {
        if (!this.handlers[eventName]) return;

        this.handlers[eventName].forEach((handler) => {
            handler(eventName , this);
        })
    }
}

const manager = new EventManager();

const helloVova = (name , e) => {
    console.log('Hello' , name , e);
};
const byeVova = (name , e) => {
    console.log('Bye' , name , e);
};

manager.on('Vova' , helloVova)
manager.on('Vova' , byeVova);
manager.off('Vova' , byeVova);

manager.on('Vova' , byeVova);


manager.trigger('Vova');
