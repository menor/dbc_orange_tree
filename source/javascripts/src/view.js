/* Write your JS to modify the view here */
$(document).ready(function(){
  tree = new OrangeTree();
  $('.plant').on('click', OrangeTreeView.createTree);
  $('.age').click(function(){OrangeTreeView.age(tree)})
  $('.pick').click(function(){OrangeTreeView.pick(tree)})
});


