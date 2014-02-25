// /* Write your JS to modify the view here */

  // on document load




//



var JQueryWrapper = {};


var buttonWatcher(){
  $(".plant").click( JQueryWrapper.make_tree )
}

JQueryWrapper.make_tree = {
    $("#orange-tree-template").css("display", "initial");
    createTree()
}




var Viewer = function(){

}


$(document).ready(function() {
  buttonWatcher

});