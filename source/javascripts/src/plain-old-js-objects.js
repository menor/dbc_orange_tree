/* Write your code for the plain-old-js-objects-spec here */

FRUIT_BEARING_AGE = 3;

function createTree() {
  return { 
    age: 0,
    height: 0,
    orangeCount: 0,
    grow: function() {
      this.age++;
      this.height += 10;
    }
  }
}
