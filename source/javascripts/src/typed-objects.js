// Write your Orange Tree code here - you may use constructor functions
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

var createTree = function(){ return new Tree() };

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

var pickOrange = function(){return new Orange();};



