const playerOne = {
    name: 'tim',
    marker: 'X'
};

const playerTwo = {
    name: 'jenn',
    marker: 'O'
}

function printName(player) {
    console.log(player.name);
}

function Player(name, marker) {
    if(!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    
    this.name = name;
    this.market = marker;
    this.sayName = function() {
        console.log(this.name);
    }
}

const player1 = new Player('steve', 'X');
const player2 = new Player ('also steve', 'O');
player1.sayName();
player2.sayName();

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
console.log(Object.getPrototypeOf(player1) === Player.prototype);