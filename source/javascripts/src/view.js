OrangesApp.View = function(opts) {
  this.opts = opts;
};

OrangesApp.View.prototype = {
  update: function(dataSource) {
            this.updateTreeImage(dataSource);
            this.updateAgeCount(dataSource);
            this.updateFruitCount(dataSource);
            this.updateFruitImages(dataSource);
          },

  updateFruitImages: function(dataSource) {
                       $(this.opts.orangesImagesContainer).empty();
                       for (var i = 1; i <= dataSource.tree.orangeCount; i++) {
                         $(this.opts.orangesImagesContainer).append("<img id='orange' src='images/orange.gif'>");
                       }
                     },

  updateFruitCount: function(dataSource) {
                    $(this.opts.fruitCountDisplaySelector).text(dataSource.tree.orangeCount);
                    },

  updateAgeCount: function(dataSource) {
                    $(this.opts.ageDisplaySelector).text(dataSource.tree.age);
                  },

  updateTreeImage: function(dataSource) {
                     if (dataSource.tree) {
                       $(this.opts.treeDivSelector).show();
                     } else {
                       $(this.opts.treeDivSelector).hide();
                     }
                   }
};
