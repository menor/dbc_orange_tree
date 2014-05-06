/* Write your JS to modify the view here */
$(document).ready( function() {
  $('.plant').on ('click', function () { createTree() } );
  $('.age-button').on ('click', function () { ageTree() } );
  $('.pick').on ('click', function () { pickOrange() } );
});


function createTree() {
  tree = new Tree;
  showTree()
}

function showTree() {
  $('#orange-tree-template').show();
}

function ageTree() {
  tree.grow();
  $('.age').html(tree.age);
  bigTree();
  updateOranges();
}

function updateOranges(){
  $('.fruit-count').html(tree.orangeCount);
  drawOranges();
}

function pickOrange() {
  if(tree.orangeCount > 0) {
    tree.orangeCount -= 1;
    updateOranges();
  };
}

function bigTree() {
  if(tree.age >= FRUIT_BEARING_AGE) {
    $('.display-tree-small').addClass('display-tree-big').removeClass('display-tree-small');
  };
}

function drawOranges(){
  $('.orange').remove();
  for (var i=0;i<tree.orangeCount;i+=1) {
    $('.oranges').prepend("<img class='orange' src='images/orange.gif' />")
  }
}

