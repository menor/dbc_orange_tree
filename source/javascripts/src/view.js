/* Write your JS to modify the view here */

window.onload = function() {
  $(".plant").on("click", userPlantsTrees);
}

var userPlantsTrees = function() {
  var tree = createTree();
  $(".grove").append("<img src='images/tree.jpeg'>");
  $(this).remove();

  $(".grove").append("<button class='age'>Make Tree Grow</button>");
  $(".age").on("click", function(){userGrowsTrees(tree)});

  $(".grove").append("<button class='pick'>Pick an Orange</button>");
  $(".pick").on("click", function(){userPicksOrange(tree)});
}

var orangesAvailable = function(tree) {
  if(tree.orangeCount > 0) {
    return true;
  }
  else {
    return false;
  }
}

var userPicksOrange = function(tree) {
  if(orangesAvailable(tree)) {
    var orange = pickOrange(tree);
    $(".grove").find(":last-child").remove();
    console.log(tree.orangeCount);
  }
}

var growOranges = function(tree) {
  if (tree.age == FRUIT_BEARING_AGE) {
    for(var i=0; i<tree.orangeCount; i++) {
      $(".grove").append("<img id='orange' src='images/orange.gif'>");
    }
  }
}

var userGrowsTrees = function(tree) {
    tree.grow();
    growOranges(tree);
    //$(".grove").find("img").animate({width: "100%", height: "100%"});
    // console.log(tree);
}

