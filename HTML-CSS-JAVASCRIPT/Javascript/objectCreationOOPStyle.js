let Human = {
  species: "Human",
  create: function(values) {
    let instance = Object.create(this);

    Object.keys(values).forEach(function(key) {
      instance[key] = values[key];
    });

    return instance;
  },
  saySpecies: function () {
    console.log(this.species);
  },
  sayName: function() {
    console.log(this.name);
  }
};

let Musician = Human.create({
  species: "Musician",
  playInstrument: function() {
    console.log('plays' + this.instrument);
  },
});

let will = Musician.create({name: "Will", instrument: "Guitar"});