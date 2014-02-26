$(function() {
  console.log('document is ready');
  OrangesApp.view = new OrangesApp.View();
});

OrangesApp.View = function() {
  console.log('created a view, yay');
};

OrangesApp.View.prototype = {
  update: function(dataSource) {
            if (dataSource.tree) {
              console.log('i should display a tree!');
            }
          }
};
