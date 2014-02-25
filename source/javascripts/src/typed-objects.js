// Write your Orange Tree code here - you may use constructor functions
var Tree = function(){
  this.age = 0;
  this.height = 0;
  this.orangeCount = 0;
  this.isAlive = true;
  FRUIT_BEARING_AGE = 10;
  MAX_AGE = 250;
  this.fruits = [];
};

Tree.prototype ={

  grow: function(){
   this.age++;
   this.height += 10;
   if( this.age >= FRUIT_BEARING_AGE){
    this.growOranges();
   }
   this.isAlive = (this.age <= MAX_AGE);
  },

  dropOrange: function(){
    this.orangeCount--;
    var orange = this.fruits.pop();
    return orange;
  },

  show: function(){
    var img = '<img id="the-tree" alt="tree" src="images/tree.jpeg"></img>';

    $('.grove').prepend(img);
  },

  growOranges: function(){
    orangeNumber = Math.random();

    for(var i = 0; i < orangeNumber; i++){
      this.fruits.push(new Orange(this.fruits.length + 1));
    }
  }
}

var createTree = function(){ return new Tree() };



var Orange = function(id){
  this.diameter = Math.random()
  this.id = id
};

Orange.prototype = {
  show: function(){
    var img = '<img class="orange" id="orange-'+this.id+'" alt="orange" src="images/orange.gif"></img>';
    $('.grove').append(img);
  },
  hide: function(){
    $('img#orange-'+this.id).hide();
  }
}

var pickOrange = function(){ return new Orange() };



