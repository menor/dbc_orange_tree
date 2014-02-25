/* Write your code for the plain-old-js-objects-spec here */
  var FRUIT_BEARING_AGE = 2;
  var MAX_AGE = 5;

Tree = function(){
  this.age = 0;
  this.height = 0;
  this.orangeCount = 0;
  this.isAlive = true
}

// var Grove = [];
function Grove (){
  this.treeCount = 0;
  this.space = [];
};

Orange = function(){
  this.diameter = (Math.floor(Math.random()*10)+1);
};

function createOrange(){
  return new Orange();
};

function createTree(){
  return new Tree();
  if(this.age = FRUIT_BEARING_AGE)
  {
    this.orangeCount += Math.floor(Math.random()*5)
  }

};


Tree.prototype.grow = function(){
  this.age += 1;
  this.height += 10;
  if (this.age == FRUIT_BEARING_AGE)
  {
    this.orangeCount += (Math.floor(Math.random()*10)+1)
  };
  if (this.age > MAX_AGE)
  {
    this.isAlive = false
  };
};


Tree.prototype.dropOrange = function(){
  if(this.orangeCount > 0)
  {
    this.orangeCount--;
    return new Orange();
  };
};

pickOrange = function(){
  this.diameter = (Math.floor(Math.random()*10)+1);
  return new Orange();
};



