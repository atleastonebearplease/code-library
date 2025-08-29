// let car = {
//     brand: 'Honda', 
//     getBrand: function() {
//         return this. brand;
//     }
// }

// log(car.getBrand());


/*
You get undefined instead of "Honda" because when you call a method without specifying it's object,
Javascript sets 'this' to the global object in non-strict mode and 'undefined' in strict mode.

To fix this, use the bind() method of Function.prototype
*/
//let brand = car.getBrand;
//log(brand()); - Gives 'undefined'

// let brand = car.getBrand.bind(car);
// log(brand(), 'Using .bind() method so that the "this" object will refer to something');

let car = {
    brand: 'Honda',
    getBrand: function () {
        return this.brand;
    }
}

let bike = {
    brand: 'Harley Davidson'
}

let brand = car.getBrand.bind(bike);
log(brand());

log(car.getBrand());
log(bike.brand);

function getBrand(prefix) {
    log(prefix + this.brand);
}

let honda = {
    brand: 'Honda',
};

let audi = {
    brand: 'Audi',
};

getBrand.call(honda, "It's a ");
getBrand.call(audi, "It's an ");

function ObjectFactory() {
    this.property = `Hi, I'm a property!`;
}

let obj = new ObjectFactory();

log(typeof ObjectFactory.prototype);
log(ObjectFactory.prototype.isPrototypeOf(obj));

ObjectFactory.prototype.prop = `I'm a property of ObjectFactory.prototype`;

rawLog(obj);
log(obj.prop);