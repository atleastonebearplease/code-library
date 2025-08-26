function log(item, itemDescription=""){
    console.log(`${itemDescription}: ${item}`);
}

//Book exercise=================================================

function Book(title, author, pageCount, hasBeenRead) {
    if(!new.target){
        throw Error("You must use the 'new' operator to call the constructor")
    }

    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.hasBeenRead = hasBeenRead;

    this.info = function() {
        let readString = '';

        if(hasBeenRead === true) readString = 'has been read';
        else readString = 'has not been read';

        return `${title} by ${author}, ${pageCount} pages, ${readString}`;
    }
}

let newBook = new Book("The Hobbit", "J.R.R. Tolkien", 120, true);

console.log(newBook.info());
//==============================================================

function Person(name){
    this.name = name;
}

Person.prototype.sayName = function(){
    console.log(`Hello, I'm ${this.name}!`);
};

function Player(name, marker) {
    if(!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.name = name;
    this.marker = marker;
}

Player.prototype.getMarker = function(){
    console.log(`My marker is '${this.marker}'`);
};

Player.prototype.sayHello = function() {
   console.log("Hello, I'm a player!");
};

log(Object.getPrototypeOf(Player.prototype)); //returns Object.prototype

//Now make 'Player' objects inherit from 'Person'
Object.setPrototypeOf(Player.prototype, Person.prototype);

log(Object.getPrototypeOf(Player.prototype));

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');

player1.sayName(); // Hello, I'm steve!
player2.sayName(); // Hello, I'm also steve!

player1.getMarker(); // My marker is 'X'
player2.getMarker(); // My marker is 'O'

//====================================

let x = {};

log(Object.getPrototypeOf(x));

log(x.toString());

let y = [];

log(Object.getPrototypeOf(y));

log(y instanceof Array, "Y is instance of Array object");