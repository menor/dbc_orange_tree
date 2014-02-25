// Write your Orange Tree code here - you may use constructor functions
/* Write your code for the plain-old-js-objects-spec here */
FRUIT_BEARING_AGE = 3
MAX_AGE = 12

function Tree(){
  this.age =  0;
  this.height =  0;
  this.orangeCount = 0;
  this.isAlive = true;
}

function createTree(){
  return new Tree();
};

Tree.prototype = {
  grow: function(){
    this.age += 1;
    this.height += 10;
    if (this.age > FRUIT_BEARING_AGE)
      {this.orangeCount += Math.floor(Math.random()*10+1)}
    if(this.age > MAX_AGE){
      this.isAlive = false;
    }
  },

  dropOrange: function(){
      return this.orangeCount -= 1;
  }
};

function Orange(){
  this.diameter = Math.random(8) +1;
}

function pickOrange(){
  return new Orange;
}