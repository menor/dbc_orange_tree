/* Write your JS to modify the view here */

var tree = createTree();

window.onload = function() {



  $(".plant").on("click", function() {
      $("#orange-tree-template").css("display", "block")
      $("p.age").html("Age: " + tree.age);
      $("p.fruit-count").html("Fruit Count: " + tree.orangeCount);

    });

  $(".pick").on("click", function() {

  });









  $(".age").on("click", function() {
    tree.grow();
    if (tree.isAlive) {
      $("p.age").html("Age: " + tree.age);
      $("p.fruit-count").html("Fruit Count: " + tree.orangeCount);
    } else {
      $("p.age").html("I am Dead, wasted into nothing, damn you cruel world. Damn you.");
      $("p.fruit-count").html("Eat this fruit and die a painful diahrrea filled death.");
    }
  });

}