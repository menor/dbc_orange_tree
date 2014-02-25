/* Write your code for the plain-old-js-objects-spec here */

function Tree() {
  FRUIT_BEARING_AGE= 6; //this.FRUIT_BEARING_AGE = 6; //works anywhere EXCEPT in the prototype
  MAX_AGE = 23;


  this.age = 0;
  this.height = 0;
  this.orangeCount = 0;
  this.isAlive = true;

}

var createTree = function () {
  return new Tree();
}


Tree.prototype = {

  //grow
  grow: function() {
    this.age += 1;
    this.height += 10;

    if (this.age >= FRUIT_BEARING_AGE) {
      this.orangeCount = Math.floor((Math.random() * 12) + 2);
    }

    if (this.age > MAX_AGE){
      this.isAlive = false
    }
  },

  //drop oranges
  dropOrange: function() {
    var orangesDropped = 0;
    if (this.age >= FRUIT_BEARING_AGE && this.orangeCount > 0) {
      orangesDropped = Math.floor((Math.random() * 12) + 2);
    }
    this.orangeCount -= orangesDropped;
    return orangesDropped;
  }

}


function Orange() {
  this.diameter = Math.floor((Math.random() * 10) + 1);
}

var pickOrange = function () {
  return new Orange();
}