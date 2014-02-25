var OrangeTreeView ={
createTree: function(){
  $('.plant').fadeOut();
  $('#orange-tree-template').show();
  $('p.age').html("Age: 0");
  $('p.fruit-count').html("Fruit: 0");
}
};



OrangeTreeView.age = function(tree){
  $('.oranges').remove();
  if (tree.age < tree.maxAge)
  tree.grow();
  $('p.fruit-count').html("Fruit: " + tree.orangeCount);
  $('p.age').html("Age: " + tree.age);
  for(var i = 0; i<tree.orangeCount;i++){
    $('.display-tree-big').prepend('<img class="oranges" src="images/orange.gif"/>');
  }
};

OrangeTreeView.pick = function(tree){
  if (tree.orangeCount > 0){
    tree.dropOrange();
    $('.oranges:first-child').remove();
    $('p.fruit-count').html("Fruit: " + tree.orangeCount);
  }
};

