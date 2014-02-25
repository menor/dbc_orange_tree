/* Write your code for the plain-old-js-objects-spec here */


FRUIT_BEARING_AGE = 3;
MAX_AGE = 10;

function Tree() {
  this.age = 0;
  this.height = 0;
  this.orangeCount = 0;
  this.oranges = new Array();
  this.isAlive = true;
}

function Orange() {
  this.diameter = Math.floor((Math.random()*10)+1);
}

Tree.prototype = {
  grow: function() {
    this.age++;
    this.height += 10;
    if(this.age == FRUIT_BEARING_AGE) {
      this.orangeCount = Math.floor((Math.random()*10)+1);
      for(var i=0; i<this.orangeCount; i++) {
        this.oranges.push(new Orange);
      }
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

function pickOrange(tree) {
  tree.orangeCount--;
  return tree.oranges.shift();
}

function createTree(){
  return new Tree();
};
