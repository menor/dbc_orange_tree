/* Write your JS to modify the view here */

var $Wrapper = {
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
      $Wrapper.killTree();
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
  },
  pickOrange: function(){
    if ($Wrapper.orange() && tree.isAlive)
    {
    $Wrapper.orange().remove();
    $("h2").html("You picked an orange!");
    var orange = tree.dropOrange();
    var count = $('p.fruit-count').html();
    $('p.fruit-count').html(parseInt(count) + 1);
    }
    else
    {
    $("h2").html("No more oranges!");
    }
  },
  orange: function(){
    var src = "orange.gif";
    return $('img[src$="'+ src + '"]')[0];
  }
};

$(function () {
  $("button.plant").click($Wrapper.plantTree);
  $(".pick").click($Wrapper.pickOrange);
  $(".age").click($Wrapper.ageTree);
});

