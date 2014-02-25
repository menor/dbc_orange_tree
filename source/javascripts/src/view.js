$(document).on('ready', function() {
  // Put the code that starts your app running here.
  $('.plant').on('click', function(){
     tree = createTree();
    $('.grove').append($('#orange-tree-template').show());
  })


  $('.age').on('click', function(){
    tree.grow();
    if(tree.orangeCount > 0){
      $('.display-tree-big').append("<img src='images/orange.gif'>");
    }
    console.log(tree.orangeCount);
    $('p:first').text(tree.age)
  })

  $('.pick').on('click', function (){
      tree.dropOrange();
      $('.display-tree-big img:last').remove()
  })
});


