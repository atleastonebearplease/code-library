/*
    QUICK NOTES

    - No commas between class methods, similar to more statically typed languages
    - Classes are not entirely new under the hood. Classes are in fact functions, proved
    by using typeof operator. It still makes a prototype and everything
    - A function created by class is labeled by a special property [[IsClassConstructor]]: true.
    It must be called with new.
    - Class methods are non-enumerable. Good because we usually don't want class methods when enumerating an object
    - Classes always use strict - all code inside uses strict mode
    - They can be defined inside another expression, just like functions
    - They have class fields, which are just done like name = "John". They are defined 
    on individual objects, not in the prototype.
    - Values can also be assigned with complex expressions and functions calls in a class
    i.e. name = prompt("Name, please?", "John");
*/

class User {
  constructor(name) { 
        this.name = name; 
    }
  sayHi() {
        alert(this.name); 
    }
}

// class is a function
log(typeof User); // function

// ...or, more precisely, the constructor method
alert(User === User.prototype.constructor); // true

// The methods are in User.prototype, e.g:
alert(User.prototype.sayHi); // the code of the sayHi method

// there are exactly two methods in the prototype
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

let user = new User('John');
user.sayHi();


//Expression version - it can also have a name only visible inside of the class
let User2 = class {
    sayHi(){
        alert("Hello");
    }
}

//This can also be done dynamically
function makeClass(phrase) {
    //declare a class and return it
    return class {
        sayHi() {
            alert(phrase);
        }
    };
}

let user3 = makeClass("Hello");

new User().sayHi();

//Class fields

class User3 {
    name = "John";

    sayHi() {
        log(`Hello, ${this.name}!`);
    }
}

new User3().sayHi();

//Making bound methods with class fields
/*
    This is necessary for passing functions around and using 'this' 

    class Button {
  constructor(value) {
    this.value = value;
  }

  click() {
    alert(this.value);
  }
}

let button = new Button("hello");

setTimeout(button.click, 1000); // this will be undefined when the function is called
*/

class Button {
    constructor(value) {
        this.value = value;
    }

    /*The field click is now created on a per-object basis; there's a separate
    function for each button object, with this inside it referencing that object. 
    We can pass button.click around anywhere and the value of this will always be 
    correct.*/
    click = () => { 
        log(this.value);
    }
}

let button = new Button("hello");

setTimeout(button.click, 1000); //hello is output


//=====Generator function and more realistic class declaration
class Rectangle {
    width = 0;
    height = 0;
    
    constuctor(height, width) {
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.calcArea();
    }

    calcArea() {
        return this.height * this.width;
    }

    *getSides() {
        yield this.height;
        yield this.width;
        yield this.height;
        yield this.width;
    }
}

const square = new Rectangle(10, 10);

log(square.area);
log([...square.getSides()]);


//=====Static methods
/*
They are only present on the class itself. They can't be called on the instances.
*/
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static displayName = "Point";
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(-1, -1);
const p2 = new Point(1, 1);

log(Point.displayName);
log(Point.distance(p1, p2));


//=====Private fields
//They can't be added later, must be done in class declaration

class Rectangle {
    #height = 0;
    #width = 0;

    constructor(height, width) {
        this.#height = height;
        this.#width = width;
    }
}


class ClassWithPrivate {
    #privatefield;
    #privateFieldWithInitializer = 42;

    #privateMethod() {
        console.log("I'm private");
    }

    static #privateStaticField;
    static #privateStaticFieldWithInitializer = 42;

    static #privateStaticMethod() {
        this.#privateStaticField = 10;

        return this.#privateStaticField + this.#privateStaticFieldWithInitializer;
    }
}

//=====Private static field

class ClassWithPrivate {
    #privatefield;
    #privateFieldWithInitializer = 42;

    #privateMethod() {
        console.log("I'm private");
    }

    static #privateStaticField;
    static #privateStaticFieldWithInitializer = 42;

    static #privateStaticMethod() {
        this.#privateStaticField = 10;

        return this.#privateStaticField + this.#privateStaticFieldWithInitializer;
    }
}

//=====Inheritance with the extends keyword
/*
IF there is a constructor present in the subclass, it must first call super()
before using this keyword. The super keyword can also be used to call methods
in the super class
*/

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        log(`${this.name} makes a noice.`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name); //call the super class constructor and pass in the name parameter
    }

    speak() {
        super.speak();
        log(`${this.name} barks.`);
    }
}

const d = new Dog("Mitzie");
d.speak(); //Mitzie barks.


