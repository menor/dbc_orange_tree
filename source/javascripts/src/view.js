/* Write your JS to modify the view here */

var JQueryWrapper = {
  plantTree: function() {
    $("#orange-tree-template").css({"display":"inline"});
    tree = createTree();
    $("h2").html("You made a tree!");
  },
  ageTree: function() {
    tree.grow();
    $('p.age').html(tree.age);
    if (tree.age > MAX_AGE)
    {
      JQueryWrapper.killTree();
    }
    else if (tree.age >= FRUIT_BEARING_AGE)
    {
    $('.display-tree-big').prepend('<img src="../source/images/orange.gif" />');
    }
  },
  killTree: function() {
    $('.display-tree-big').toggle({ effect:"scale", direction:"both", origin:["top","left"]});
      $('.display-tree-big').addClass('display-tree-small').removeClass('display-tree-big');
      $('p.age').html('Dead');
      $("h2").html("Your tree withered and died!");
      $('.display-tree-small').fadeIn('slow',function(){
        $('.display-tree-small').fadeOut('fast');
      });
  }
};


$(function () {
  $("button.plant").click(JQueryWrapper.plantTree);


  $(".pick").click(function() {

  });

  $(".age").click(JQueryWrapper.ageTree);

});


// Plant Tree
// Create new tree and generate tree image on page.
// Using tree attributes update HTML on page.
