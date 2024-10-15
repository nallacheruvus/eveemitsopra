const events = require("events");
let eventEmitter = new events.EventEmitter();


eveQueueFun();

function eveQueueFun() {
    let lista = function lista() {
        console.log("List A executed");
    };
    let listb = function listb() {
        console.log("List B executed");
    };
    let listc = function listc() {
        console.log("List C executed");
    };
    let listd = function listd() {
        console.log("List D executed");
    };
    let liste = function liste() {
        console.log("List E executed");
    };
    let lArr = [lista, listb, listc, listd, liste];
    lArr.filter(n => (n.name === 'lista' || n.name === 'listb' || n.name === 'listc')).forEach(n => {
        // if (n.name === 'lista') { } else {
        eventEmitter.on("myeve", n);
        // }
    });

    setTimeout(() => {
        eventEmitter.emit("myeve");
    }, 5000);
}

function myFun() {
    let listenera = function listenera() {
        console.log("Listener A executed");
    };
    let listenerb = function listenerb() {
        console.log("Listener B executed");
    };
    eventEmitter.addListener("conn", listenera); //adding a subscription
    eventEmitter.on("conn", listenerb); //...
    eventEmitter.removeListener("conn", listenera);
    eventEmitter.emit("conn");
}



