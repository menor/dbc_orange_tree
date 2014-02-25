/* Write your JS to modify the view here */

Tree.prototype = {
  show: function(){
    var img = '<img id="the-tree" alt="tree" src="images/tree.jpeg"></img>';

    $('.grove').prepend(img);
  }
};



var plantTree = function(){
  var tree = createTree();
  tree.show();
  return tree;
};



var InterfaceManager = {}
InterfaceManager.setupPlantButton = function() {
  $('button.plant').on('click', function(){
    if ($('#the-tree').length == 0){
      grove.push(plantTree());
    };
  });
};

InterfaceManager.setupAgeButton = function() {
  $('button.age').on('click', function(){
    grove[0].grow()
  });
}


$(document).on('ready', function() {
  var grove = [];
  //Plants a tree when you click on the button
  InterfaceManager.setupPlantButton();
  InterfaceManager.setupAgeButton();

});

