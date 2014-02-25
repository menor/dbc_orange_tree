var OrangeTreeView = {

  plantTree: function(){
     if($('#orange-tree-template').is(':hidden')){
      $('.tree_dead').html("")
      $('#orange-tree-template').toggle();
    }
  },

  ageTree: function(tree){
    tree.grow();
    this.growTree(tree);
     $('p.age').html(tree.age)

    if(tree.age >= FRUIT_BEARING_AGE){
      this.bearFruit(tree)
    }

    if(tree.age >= MAX_AGE){
      this.killTree(tree)
    }
  },

  growTree: function(tree){
    $('.display-tree-big').css({ "background-size": "+=10% +=10%" })
  },

  bearFruit: function(tree){
    $('img').remove('#orange')
      for(var i=0; i < tree.orangeCount; i++){
        $('.display-tree-big').append('<img id="orange" src="images/orange.gif"/>')
      }
    $('p.fruit-count').html(tree.orangeCount)
  },


  pickTree: function(tree){
    if(tree.orangeCount <= 0){
      $('p.fruit-count').html("No More Oranges!");
      return;
    }

    $('.display-tree-big:first-child').remove()
    tree.dropOrange();
    $('#orange:first-child').remove();
    $('p.fruit-count').html(tree.orangeCount)
  },

  killTree: function(tree){

    tree.age = 0;
    tree.orangeCount = 0;
    $('img').remove('#orange')
    $('p.fruit-count').html(0)
    $('p.age').html(0)
    $('#orange-tree-template').toggle();
    $('.tree_dead').html("YOUR TREE DEADDDD")
    $('.display-tree-big').css({ "background-size": "300px 300px" })
    return
  }

}