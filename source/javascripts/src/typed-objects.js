// Write your Orange Tree code here - you may use constructor functions

function Orange(){
}

var Tree = function(){
  this.age = 0;
  this.height = 0;
  this.orangeCount = 0;
  FRUIT_BEARING_AGE = 3;
  MAX_AGE = 30;
  this.isAlive = true;
}

Tree.prototype = {
  grow: function(){
    this.age += 1;
    this.height += 10;
    if (this.age >= FRUIT_BEARING_AGE){
      this.orangeCount = Math.floor(Math.random()*10+1)
    }

    if(this.age > MAX_AGE){
      this.isAlive = false;
    }

  },

  dropOrange: function(){
    this.orangeCount = this.orangeCount - 1;
    return new Orange
  }

}

function pickOrange(){
  return new Orange
}

var OrangeTree = function(){
}




OrangeTree.prototype = new Tree();

// createTree = function(){
//   return new OrangeTree
// }
// function createTree(){
//   return new Henry;
// }

// function createTree(){
//   return new Tree;
// }