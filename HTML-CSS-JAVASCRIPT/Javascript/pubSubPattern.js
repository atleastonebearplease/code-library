let events = {
  events: {}, 

  on: function(eventName, fn) {
    this.events[eventName] = this.events[eventName] || []; //If events[eventName] does not exist, make an array
    this.events[eventName].push(fn);
  },

  off: function (eventName, fn) {
    if(this.events[eventName]) {
      for(let i = 0; i < this.events[eventName].length; i++) {

        console.log(this.events[eventName[i]]);
        if(this.events[eventName][i] === fn) {
          this.events[eventName].splice(i, 1);
          break;
        }
      }
    }
  },

  emit: function(eventName, data) {
    console.log(eventName + ' ' + 'Data: ' + data);
    
    if(this.events[eventName]) {
      this.events[eventName].forEach(function(fn) {
        fn(data);
      });
    }
  }
}

function alertHandler (data) {
  alert(data);
}

events.on('people-changed', alertHandler);
events.on('score-changed', function(data) {
  console.log(data + " I'm inside a function");
});

events.emit('people-changed', "I'm people");

events.off('people-changed', alertHandler);

events.emit('people-changed', "I'm people");
events.emit('score-changed', 50);