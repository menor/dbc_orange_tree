/* Write your code for the plain-old-js-objects-spec here */
FRUIT_BEARING_AGE = 3
MAX_AGE = 3

function Tree(){
  this.age =  0;
  this.height =  0;
  this.orangeCount = 0;
  this.isAlive = true;
}

function Orange(){
  this.diameter = Math.random(8) +1;
}

function createTree(){
  return new Tree();
};

function pickOrange(){
  return new Orange;
}

Tree.prototype = {
  grow: function(){
    this.age += 1;
    this.height += 10;
    if (this.age == FRUIT_BEARING_AGE)
      {this.orangeCount = Math.random(9)}
    if(this.age > MAX_AGE){
      this.isAlive = false;
    }
  },

  dropOrange: function(){
      return new Orange;
  }
};