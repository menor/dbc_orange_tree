// Write your Orange Tree code here - you may use constructor functions

var FRUIT_BEARING_AGE = 3;
var MAX_AGE = 6;

function Tree(){
  this.age = 0;
  this.height = 0;
  this.orangeCount = 0;
  this.isAlive = true;
}

function Orange(){
  this.diameter = Math.random()*(10);
}

function pickOrange(){
  return new Orange();
}

Tree.prototype = {
  grow: function() {
    this.age += 1;
    this.height += 10;
    if (this.age >= FRUIT_BEARING_AGE)
    {
      this.orangeCount = Math.random()*(10);
    }
    if (this.age > MAX_AGE)
    {
      this.isAlive = false;
    }
  },
  dropOrange: function() {
    this.orangeCount -= 1;
    return 1;
  },
};

function createTree() {
  return new Tree();
}