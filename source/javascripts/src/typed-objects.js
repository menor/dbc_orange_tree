// Write your Orange Tree code here - you may use constructor functions
/* Write your code for the plain-old-js-objects-spec here */
// var Grove = [];
function Grove (){
  this.treeCount = 0;
  this.space = [];
};

function createGrove(){
  return new Grove();
};

Tree = function(){
  this.age = 0;
  this.height = 0;
  this.orangeCount = 0;
  this.isAlive = true
  fruit_bearing_age = 2;
  max_age = 5;
}

function createTree(grove){
  grove.push(new Tree());
  if(this.age = fruit_bearing_age)
  {
    this.orangeCount += Math.floor(Math.random()*5)
  }

};


Orange = function(){
  this.diameter = (Math.floor(Math.random()*10)+1);
};

function createOrange(){
  return new Orange();
};


Tree.prototype.grow = function(){
  this.age += 1;
  this.height += 10;
  if (this.age == fruit_bearing_age)
  {
    this.orangeCount += (Math.floor(Math.random()*10)+1)
  };
  if (this.age > max_age)
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