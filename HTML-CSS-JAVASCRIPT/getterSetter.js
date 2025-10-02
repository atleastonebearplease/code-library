/*
    QUICK NOTES

    - You can overwrite a previous simple value by turning it into a getter/setter

    user.age might used to have been used, but say now you just want to store a birthday.
    You can instead turn age into a getter and then calculate age from birthday
*/

let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  }, 

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

log(user.fullName);

user.fullName = "Dicky Jones";

log(user.fullName);

//====Accessor Descriptors

let user2 = {
  name: "John",
  surname: "Smith",
}

Object.defineProperty(user2, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },
  
  set(value) {
    [this.name, this.surname] = value.split(' ');
  }
});

log(user2.fullName);


//====Smarter getter/setter
let user3 = {
  get name() {
    return this._name;
  },

  set name(value) {
    if(value.length < 4) {
      alert("Name is too short, need at least 4 characters");
      return;
    }

    this._name = value;
  }
}

user3.name = "Pete";
log(user3.name);

user3.name = "";