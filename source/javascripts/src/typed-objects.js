/* Write your code for the plain-old-js-objects-spec here */
FRUIT_BEARING_AGE = 6;
MAX_AGE = 20;


function Tree(){
  this.age = 0;
  this.height = 0;
  this.orangeCount = 0;
  this.isAlive = true;
};

function Orange(){
  this.diameter = Math.floor(Math.random()*10);
}

Tree.prototype = {
  grow: function()
  {
    if(this.age<MAX_AGE){this.age ++};
    this.height += 10;
    if (this.age >= FRUIT_BEARING_AGE){
      this.orangeCount = Math.floor(Math.random()*10);
    }

    if (this.age > MAX_AGE){
      this.isAlive = false;
    }
  },

	pickOrange: function(){
		this.orangeCount--
    	return new Orange();
	},

  	dropOrange: function(){
    return 1;
  },

}



var createTree = function(){
  return new Tree();
}