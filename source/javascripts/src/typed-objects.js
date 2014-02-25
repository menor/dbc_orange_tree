// Write your Orange Tree code here - you may use constructor functions
var FRUIT_BEARING_AGE = 15;
var MAX_AGE = 40;

function Tree() {
  this.age = 0;
  this.height = 0;
  this.orangeCount = 0;
  this.isAlive = true;
}

var TreePrototype = {
  grow: function() {
    this.age++;
    this.height += 10;
    if (this.age >= FRUIT_BEARING_AGE) {
      this.orangeCount += Math.floor((Math.random()*10)+1);
    } else {
      this.orangeCount = 0;
    }
    if (this.age > MAX_AGE) {
      this.isAlive = false;
    }
  },
  dropOrange: function() {
    return this.orangeCount--;
  }
};

function createTree(){
  var tree = new Tree();
  tree.__proto__ = TreePrototype;
  return tree;
}

function Orange() {
  this.diameter = Math.floor((Math.random()*10)+1);
}

function pickOrange() {
  return new Orange();
}


