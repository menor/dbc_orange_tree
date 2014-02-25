// /* Write your JS to modify the view here */


var JQueryWrapper = {};

JQueryWrapper.buttonWatcher = function() {
  $('.plant').on('click', function() {
    $('#orange-tree-template').css({display: 'inline'});
    JQueryWrapper.tree = createTree();
  });
};

JQueryWrapper.ageButton = function(){
	$('.age').on('click', function(){
		JQueryWrapper.deadtree();

		JQueryWrapper.tree.grow();
		JQueryWrapper.ageTextChange(JQueryWrapper.tree.age);
		JQueryWrapper.fruitTextChange(JQueryWrapper.tree.orangeCount);
		$('.oranges').remove();
		JQueryWrapper.growTree();

		JQueryWrapper.treePrinter();	
	});
};

JQueryWrapper.deadtree = function(){
	console.log(JQueryWrapper.tree.age)
	if (JQueryWrapper.tree.age == 20) {
		$("#orange-tree-template").css({display: 'none'});
	};
}

JQueryWrapper.growTree = function(){
	if (JQueryWrapper.tree.age == 12) {
		$("div.display-tree-small").addClass('display-tree-big').removeClass('display-tree-small');
	};
};

JQueryWrapper.treePrinter = function(){
	if (JQueryWrapper.producer()) {
		for (var i =1 ; i <= JQueryWrapper.tree.orangeCount; i++) {
		$("div.display-tree-small").prepend('<img class="oranges" src="images/orange.gif"/>');
		$("div.display-tree-big").prepend('<img class="oranges" src="images/orange.gif"/>');

		};
	};
};


JQueryWrapper.pickButton = function(){
	$('.pick').on('click', function(){
		JQueryWrapper.tree.pickOrange();
		JQueryWrapper.tree.orangeCount;
		$("img.oranges:first-child").remove();
		JQueryWrapper.fruitTextChange(JQueryWrapper.tree.orangeCount);
		});
};


JQueryWrapper.ageTextChange = function(age){
	$('p.age').text(age);
}

JQueryWrapper.fruitTextChange = function(count){
	$('p.fruit-count').text(count);
}

JQueryWrapper.producer = function(){
	return (JQueryWrapper.tree.orangeCount > 0) ? true : false;
}	

$(document).ready(function() {
  JQueryWrapper.buttonWatcher();
  JQueryWrapper.ageButton();
  JQueryWrapper.pickButton();
});