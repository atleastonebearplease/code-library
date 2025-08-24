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

const player1 = Player('steve', 'X');
const player2 = new Player ('also steve', 'O');
player1.sayName();
player2.sayName();