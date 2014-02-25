/* Write your code for the plain-old-js-objects-spec here */

//TREE RELATES STUFF
function Tree() {
  FRUIT_BEARING_AGE = 6; //this.FRUIT_BEARING_AGE = 6; //works anywhere EXCEPT in the prototype
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
    var newOranges = 0;
    if (this.age <= MAX_AGE) {
      this.age += 1;
      this.height += 10;
      if (this.age >= FRUIT_BEARING_AGE) {
        newOranges = Math.floor((Math.random() * 12) + 1);
        this.orangeCount += newOranges;
      }
    } else {
      this.isAlive = false;
    }
    return newOranges;
  },

  //drop oranges
  dropOrange: function() {
    var orangesDropped = 0;
    if (this.age >= FRUIT_BEARING_AGE && this.orangeCount > 0) {
      orangesDropped = Math.floor((Math.random() * this.orangeCount) + 1);
    }
    this.orangeCount -= orangesDropped;
    return orangesDropped;
  },

  pickOrange: function() {
    var orangesPicked = 0;
    if (this.age >= FRUIT_BEARING_AGE && this.orangeCount > 0) {
      orangesPicked = 1;
    }
    this.orangeCount -= orangesPicked;
    return orangesPicked;
  }


}





//ORANGE RELATED STUFF
function Orange() {
  this.diameter = Math.floor((Math.random() * 10) + 1);
}

// var pickOrange = function () {
//   return new Orange();
// }