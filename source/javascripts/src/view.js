var OrangeTreeViewer = {};

OrangeTreeViewer.plantTree = function(){
  $('#orange-tree-template').show();
  $('.display-tree-big').append('<img src="../source/images/tree.jpeg" alt="this should be a tree!"/>')
  createTree
};

OrangeTreeViewer.pickOrange = function(){

};

OrangeTreeViewer.ageGrove = function(){
  for(tree in Grove.space){
    Tree.age
    return tree.orangeCount
    $('img').prepend('<img src= "../source/images/orange.gif">');
  };
};

$(document).ready(function(){
$('.plant').on("click", OrangeTreeViewer.plantTree);
$('.pick').on("click", OrangeTreeViewer.pickOrange);
$('.age').on("click", OrangeTreeViewer.ageGrove);
});