//This uses the power of closures to hide the reputation variable
//It exposes the named items by returning the object, and get/set functions for reputaation,
//but not the reputation variable itself. This is useful for common objects, though may
//be more costly then using a true constructor function. Only matters if you are making thousands
//of objects. 

//Note that it is just a regular function that returns an object

function createUser (name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

console.log({
  discordName: josh.discordName,
  reputation: josh.getReputation()
});

