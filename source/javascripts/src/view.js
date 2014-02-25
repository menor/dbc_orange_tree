/* Write your JS to modify the view here */

var JQueryWrapper = {
  plantTree: function() {
    $("#orange-tree-template").css({"display":"inline"});
    tree = createTree();
    $("h2").html("You made a tree!")
  },
  ageTree: function() {
    tree.grow();
    $('p.age').html(tree.age);
    if (tree.age > MAX_AGE)
    {
      $('.display-tree-big').css({"visibility":"hidden"})
      $('p.age').html('Dead')
    }
    else if (tree.age >= FRUIT_BEARING_AGE)
    {
    $('.display-tree-big').prepend('<img src="../source/images/orange.gif" />')
    }
  }
}



$(function () {
  $("button.plant").click(JQueryWrapper.plantTree);


  $(".pick").click(function() {

  });

  $(".age").click(JQueryWrapper.ageTree);

});


// Plant Tree
// Create new tree and generate tree image on page.
// Using tree attributes update HTML on page.
