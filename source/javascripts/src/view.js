/* Write your JS to modify the view here */
$(document).ready(function(){
  $('.plant').on('click', function(){

    tree = new Tree();

    if($('#orange-tree-template').is(':hidden')){
      $('#orange-tree-template').toggle();
    }
    // $('.display-tree-big').append('<img id="orange-tree" src="images/tree.jpeg"/>')
  })


  $('.age').on('click', function(){
    tree.grow();

    $('p.age').html(tree.age)

    if(tree.age >= FRUIT_BEARING_AGE){
      $('img').remove('#orange')

      for(var i=0; i < tree.orangeCount; i++){
        $('.display-tree-big').append('<img id="orange" src="images/orange.gif"/>')
      }
    }

  })

  $('.pick').on('click', function(){
      $('.display-tree-big:first-child').remove()
      tree.dropOrange();

      $('img').remove('#orange')

       for(var i=0; i < tree.orangeCount; i++){
        $('.display-tree-big').append('<img id="orange" src="images/orange.gif"/>')
      }

      $('p.fruit-count').html(tree.orangeCount)
  })

})