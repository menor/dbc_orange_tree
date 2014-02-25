/* Write your JS to modify the view here */

var tree = createTree();

window.onload = function() {



  $("button.plant").on("click", function() {
      $("#orange-tree-template").css("display", "block")
      $("p.age").html("Age: " + tree.age);
      $("p.fruit-count").html("Fruit Count: " + tree.orangeCount);

    });

  $("button.pick").on("click", function() {
    var picked_orange = tree.pickOrange();
    $("p.fruit-count").html("Fruit Count: " + tree.orangeCount);
    //for (i = 0; i < picked_orange; i++){
      console.log("huehuehue i steal oranges");
      $('.orange').first().remove();
    //}
  });









  $("button.age").on("click", function() {
    var newOranges = tree.grow();
    if (tree.isAlive) {
      $("p.age").html("Age: " + tree.age);
      $("p.fruit-count").html("Fruit Count: " + tree.orangeCount);
      for (i = 0; i < newOranges; i++){
        $("div.display-tree-big").append("<img src=\"images/orange.gif\" class=\"orange\"/>");
      }
    } else {
      $("p.age").html("I am Dead, wasted into nothing, damn you cruel world. Damn you.");
      $("p.fruit-count").html("Eat this fruit and die a painful diahrrea filled death.");
    }
  });

}