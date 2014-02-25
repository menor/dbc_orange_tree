/* Write your code for the plain-old-js-objects-spec here */

FRUIT_BEARING_AGE = 3;
MAX_AGE = 10;

function Orange() {
};

function createTree() {
  return { 
    age: 0,
    height: 0,
    orangeCount: 0,
    isAlive: true,
    oranges: [],

    grow: function() {
      this.age++;
      this.height += 10;
      this.bearFruit();
      if (this.age > MAX_AGE ) {
        this.die();
        return;
      }
    },


    bearFruit: function() {
                 if (this.age >= FRUIT_BEARING_AGE) {
                   var yield = Math.floor(Math.random()*4);
                   this.orangeCount += yield
                   for (var i = 0; i < yield; i++) {
                     this.oranges.push(new Orange())
                   }
                 }
               },

    dropOrange: function() {
                  var fallingCitrus = this.oranges.pop();
                  this.orangeCount--;
                  return fallingCitrus;
                },

    die: function() {
           this.isAlive = false;
         }
  }
}
