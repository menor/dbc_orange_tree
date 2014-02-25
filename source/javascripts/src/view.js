/* Write your JS to modify the view here */
var grove = [];

var plantTree = function(){
  var tree = createTree();
  tree.show();
  grove.push(tree);
};



var InterfaceManager = {}
InterfaceManager.setupPlantButton = function() {
  $('button.plant').on('click', function(){
    if ($('#the-tree').length == 0){
      plantTree();
    };
  });
};

InterfaceManager.setupAgeButton = function() {
  $('button.age').on('click', function(){
    var fruits = grove[0].fruits
    var orangeCount = fruits.length;

    grove[0].grow();

    var newFruits = grove[0].fruits.length - orangeCount;

    for(var i = 0; i < newFruits; i++){
      grove[0].fruits[fruits.length - newFruits].show();
    };
  });
}

InterfaceManager.setupPickButton = function(){
  $("button.pick").on('click', function(){
    var orange = grove[0].dropOrange();
    orange.hide()
  })
}



$(document).on('ready', function() {

  //Plants a tree when you click on the button
  InterfaceManager.setupPlantButton();
  InterfaceManager.setupAgeButton();
  InterfaceManager.setupPickButton();
});

