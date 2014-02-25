/* Write your JS to modify the view here */
$(document).ready(function(){
  var tree = new Tree();
  $('.plant').on('click', OrangeTreeView.plantTree);
  $('.age').click(function(){OrangeTreeView.ageTree(tree)});
  $('.pick').click(function(){OrangeTreeView.pickTree(tree)});
});