/* Write your code for the plain-old-js-objects-spec here */

FRUIT_BEARING_AGE = 3;
MAX_AGE = 10;

function createTree() {
  return { 
    age: 0,
    height: 0,
    orangeCount: 0,
    isAlive: true,

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
                   this.orangeCount += Math.floor(Math.random()*4);
                 }
               },
    die: function() {
           this.isAlive = false;
         }
  }
}
