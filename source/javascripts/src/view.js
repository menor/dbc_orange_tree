OrangesApp.View = function(opts) {
  this.opts = opts;
};

OrangesApp.View.prototype = {
  ORANGE_IMG_HTML: "<img id='orange' src='images/orange.gif'>",

  update: function(dataSource) {
            this.updateTreeImage(dataSource);
            if (dataSource.tree) {
              this.updateAgeCount(dataSource);
              this.updateFruitCount(dataSource);
              this.updateFruitImages(dataSource);
            }
          },

  updateFruitImages: function(dataSource) {
                       $(this.opts.orangesImagesContainer).empty();
                       for (var i = 1; i <= dataSource.tree.orangeCount; i++) {
                         $(this.opts.orangesImagesContainer).append(this.ORANGE_IMG_HTML);
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
                       $(this.eventingSelectors.plantActuatorSelector).attr('disabled', 'disabled');
                       $(this.opts.treeDivSelector).show();
                     } else {
                       $(this.eventingSelectors.plantActuatorSelector).removeAttr('disabled');
                       $(this.opts.treeDivSelector).hide();
                     }
                   }
};
