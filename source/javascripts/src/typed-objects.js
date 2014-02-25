// Write your Orange Tree code here - you may use constructor functions


function OrangeTree(){
  this.age = 0,
  this.height = 0,
  this.orangeCount = 0,
  this.fruitBearingAge = 5,
  this.maxAge = 50,
  this.isAlive = true
};

function Orange(){
  this.diameter = Math.floor(Math.random()*5 + 1);
}

function pickOrange(){
  return new Orange();
}

OrangeTree.prototype = {
  grow: function(){
    this.age ++;
    this.height += 10;
    this.orangeCount = 0;
    if (this.age >= this.fruitBearingAge) {
      this.orangeCount += Math.floor(Math.random()*10 + 1);
    }
    this.die();
  },

  die: function(){
    if (this.age > this.maxAge){
      this.isAlive = false;
    }
  },

  dropOrange: function(){
    this.orangeCount --
    pickOrange();
  }
}
