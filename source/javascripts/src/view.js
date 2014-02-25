/* Write your JS to modify the view here */

var MyWrapper = {};

MyWrapper.setTreePlantListener = function() {
  $('.plant').on('click', function() {
    $('#orange-tree-template').css({display: 'inline'});
    MyWrapper.tree = createTree();
  });
};

MyWrapper.setTreeAgeListener = function() {
  $('.age').on('click', function() {
    MyWrapper.tree.grow();
    MyWrapper.setTreeAgeText(MyWrapper.tree.age);
    MyWrapper.setTreeOrangeCount(MyWrapper.tree.orangeCount)
    if (MyWrapper.tree.isFruitBearing) {
      $('.display-tree-big').replaceWith("<img src='http://www.gnostic.org/meditations/exercises/orange/orange_tree4.jpg'>");
    }

  });
};

MyWrapper.setTreePickListener = function() {
  $('.pick').on('click', function() {
    MyWrapper.tree.dropOrange();
    MyWrapper.setTreeOrangeCount(MyWrapper.tree.orangeCount)
  });
};



MyWrapper.setTreeAgeText = function(age) {
  $('.orange-tree').find('p.age').text(age);
}

MyWrapper.setTreeOrangeCount = function(orangeCount) {
  $('.orange-tree').find('p.fruit-count').text(orangeCount);
}


$(document).ready(function() {
  MyWrapper.setTreePlantListener();
  MyWrapper.setTreeAgeListener();
  MyWrapper.setTreePickListener();
});