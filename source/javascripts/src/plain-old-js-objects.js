/* Write your code for the plain-old-js-objects-spec here */
var Tree = function(){
  this.age = 0;
  this.height = 0;
  this.orangeCount = 0;
  this.isAlive = true;
  FRUIT_BEARING_AGE = 10;
  MAX_AGE = 250;


};

var Orange = function(){
  this.diameter =Math.random()
};

// function createTree(){ return new Tree(); };
var createTree = function(){return new Tree();};
// Tree.prototype.grow = function(){this.age++}

Tree.prototype ={

  grow: function(){
   this.age++;
   this.height += 10;
   if( this.age >= FRUIT_BEARING_AGE){
    this.orangeCount += Math.random();
   }
   this.isAlive = (this.age <= MAX_AGE);
  },

  dropOrange: function(){
    this.orange--;
    return new Orange();
  },
}

// function pickOrange(){
//     return new Orange();
//   };

var pickOrange = function(){return new Orange();};



