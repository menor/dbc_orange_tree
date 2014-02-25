/* Write your code for the plain-old-js-objects-spec here */
function Tree(){
  this.age = 0,
  this.height = 0,
  this.orangeCount = 0,
  FRUIT_BEARING_AGE = 5,
  MAX_AGE = 50,
  this.isAlive = true
};

function Orange(){
  this.diameter = Math.floor(Math.random()*5 + 1);
}


Tree.prototype = {
  grow: function(){
    this.age ++;
    this.height += 10;
    if (this.age >= FRUIT_BEARING_AGE) {
      this.orangeCount += Math.floor(Math.random()*10 + 1);
    }
    this.die();
  },

  die: function(){
    if (this.age > MAX_AGE){
      this.isAlive = false;
    }
  },

  dropOrange: function(){
    this.orangeCount --
    // pickOrange();
    return new Orange();
  }
}

function pickOrange(){
  return new Orange();
}

function createTree() {
  return new Tree();
};




