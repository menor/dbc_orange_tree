window.onload = function() {
  $(".plant").on("click", userPlantsTrees);
}

var userPlantsTrees = function() {
  var tree = createTree();
  $(".grove").append("<img id = 'tree' src='images/tree.jpeg'>");
  $(this).remove();

  $(".grove").append("<br><button class='age'>Make Tree Grow</button>");
  $(".age").on("click", function(){
    userGrowsTrees(tree);
  });

  $(".grove").append("<br><button class='pick'>Pick Oranges</button>");
  $(".pick").on("click", function(){userPicksOranges(tree)});
}

var userGrowsTrees = function(tree){
  tree.grow();
  console.log(tree);
  $(".grove #tree").css({height: '+=10%', width: '+=10%'});
  if (tree.age == FRUIT_BEARING_AGE){
    growOranges(tree);
  }
  if (tree.isAlive == false){
    treeDies();
  }
}

var userPicksOranges = function(tree){
  $(".orange").remove();
}

var growOranges = function(tree){
  for (var i=0; i < tree.oranges.length; i++) {
      $(".grove").append("<img class= 'orange' src='images/orange.gif'>");
    }
}

var treeDies = function(tree){
  $(".grove #tree").remove();
  $(".orange").remove();
  $(".grove").append("<p>Your tree is dead</p>");
  $(".age").remove();
  $(".pick").remove();
}
