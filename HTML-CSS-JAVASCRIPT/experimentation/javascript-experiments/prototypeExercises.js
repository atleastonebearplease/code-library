let animal = {
    eats: true,
};

let rabbit = {
    jumps: true,
    __proto__: animal,
};

//Object.keys only returns own keys
log(Object.keys(rabbit), 'Object.keys()'); //jumps

//for..in lops over both own and inherited keys
for(let prop in rabbit){
    log(prop, 'for..in loop does both own and inherited keys'); //jumps, then eats
}

//only loop over own keys using .hasOwnProperty
for(let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);

    if(isOwn) {
        log(`Our: ${prop}`, '.hasOwnProperty()');
    } else {
        log(`Inherited: ${prop}`, '.hasOwnProperty()');
    }
}

let head = {
    glasses: 1,
}

let table = {
    pen: 3,
    __proto__: head
}

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
}

let pockets = {
    money: 2000,
    __proto__: bed
}

log(pockets.pen);
log(bed.glasses);

let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster,
};

let lazy = {
    __proto__: hamster,
}

//This one found the food
speedy.eat("apple");
log(speedy.stomach);
//This one also has it. Why? Because the this.stomach lookup finds stomach[] in hamster, but not in their 
//instantiations
log(lazy.stomach);