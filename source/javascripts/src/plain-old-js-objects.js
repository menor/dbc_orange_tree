/* Write your code for the plain-old-js-objects-spec here */

function Tree(){
  FRUIT_BEARING_AGE = 3;
  MAX_AGE = 10;
  this.age = 0;
  this.height = 0;
  this.orangeCount = 0;
  this.isAlive = true;
}

function Orange(){
  this.diameter = Math.floor((Math.random()*10)+1);
}

Tree.prototype = {
  grow: function() {
    this.age++;
    this.height += 10;
    if(this.age == FRUIT_BEARING_AGE) {
      this.orangeCount = Math.floor((Math.random()*10)+1);
    }
    if(this.age > MAX_AGE) {
      this.isAlive = false;
    }
  },

  dropOrange: function() {
    if(this.orangeCount > 0) {
      this.orangeCount--;
      return new Orange;
    }
  }
}

function pickOrange() {
  return new Orange;
}

function createTree(){
  return new Tree();
};
