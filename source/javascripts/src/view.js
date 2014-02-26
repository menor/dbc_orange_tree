$(function() {
  console.log('document is ready');
  OrangesApp.view = new OrangesApp.View({
    treeDivSelector: "#orange-tree-template"
  });
});

OrangesApp.View = function(opts) {
  this.opts = opts;
};

OrangesApp.View.prototype = {
  update: function(dataSource) {
            if (dataSource.tree) {
              $(this.opts.treeDivSelector).show();
            } else {
              $(this.opts.treeDivSelector).hide();
            }
          }
};
