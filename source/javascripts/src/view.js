/* Write your JS to modify the view here */


$(document).ready(function(){
  $('.plant').on('click', function(){
    tree = new Tree();

    if($('#orange-tree-template').is(':hidden')){
      $('.tree_dead').html("")
      $('#orange-tree-template').toggle();
    }
  })


  $('.age').on('click', function(){

    if(tree.age == MAX_AGE){

      $('img').remove('#orange')
      $('p.fruit-count').html(0)
      $('p.age').html(0)
      $('#orange-tree-template').toggle();
      $('.tree_dead').html("YOUR TREE DEADDDD")
      return
    }

    tree.grow();

    $('p.age').html(tree.age)

    if(tree.age >= FRUIT_BEARING_AGE){
      $('img').remove('#orange')

      for(var i=0; i < tree.orangeCount; i++){
        $('.display-tree-big').append('<img id="orange" src="images/orange.gif"/>')
      }
    }

    $('p.fruit-count').html(tree.orangeCount)

  })

  $('.pick').on('click', function(){

    if(tree.orangeCount <= 0){
      $('p.fruit-count').html("No More Oranges!");
      return;
    }

      $('.display-tree-big:first-child').remove()
      tree.dropOrange();
      $('#orange:first-child').remove();
      $('p.fruit-count').html(tree.orangeCount)
  })

})