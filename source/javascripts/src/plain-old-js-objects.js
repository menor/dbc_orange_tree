/* Write your code for the plain-old-js-objects-spec here */
FRUIT_BEARING_AGE = 5;
MAX_AGE = 20;

function Tree(){
  this.age = 0;
  this.height = 0;
  this.orangeCount = 0;
  this.isAlive = true;
}

Tree.prototype = {
  grow: function(){
    this.age += 1;
    this.height += 10;
    this.yield();
    this.die();
  },
  dropOrange: function() {
    this.orangeCount -= 1;
    return 'orange';
  },
  die: function() {
    if(this.age > MAX_AGE) {
      this.isAlive = false;
    }
  },
  yield: function() {
    if(this.age == FRUIT_BEARING_AGE) {
      this.orangeCount += Math.floor(Math.random()*11);
    }
  }
}

function Orange() {
  this.diameter = Math.floor(Math.random()*7 +1);
};


