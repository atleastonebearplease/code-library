const obj = {a: 1, b:2 };
const {a, b} = obj;

log(a);
log(b);

function createUser(name) {
    const discordName = "@" + name;

    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => reputation++;

    return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

log(`discordName: ${josh.discordName}`);
log(`reputation: ` + josh.getReputation());


function createPlayer(name, level) {
    const { getReputation, giveReputation } = createUser(name);

    const increaseLevel = () => level++;

    return {name, getRepuation, giveReputation, increaseLevel};
}

// function outer(){
//     const outerVar = "Hey I am the outer var";

//     function inner() {
//         const innerVar = "Hey I am the inner var";

//         log(innerVar);
//         log(outerVar);
//     }

//     return inner;
// }

// const innerFn = outer();

function createGreeting(greeting = "") {
    const myGreet = greeting.toUpperCase();

    return function(name) {
        return `${myGreet} ${name}`;
    };
}

const sayHello = createGreeting('hello');
const sayHey = createGreeting('hey');

log(sayHello('wes'));
log(sayHello('kait'));
log(sayHey('kait'));

function createGame(gameName){
    let score = 0; 

    return function win() {
        score++;
        return `Your name ${gameName} score is ${score}`;
    }
}

const hockeyGame = createGame('Hockey');
const soccerGame = createGame('Soccer');