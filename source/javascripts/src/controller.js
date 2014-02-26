OrangesApp.Controller = function(config) {
  this.view = config.view;
};

OrangesApp.Controller.prototype = {
  plantActuatorEvent: function(e) {
                        if (!this.tree){ this.plantTree() }
                        this.view.update(this);
                      },

  pickActuatorEvent: function(e) {
                       console.log('picking');
                       this.tree.pickOrange();
                       this.view.update(this);
                      },

  ageActuatorEvent: function(e) {
                       this.tree.grow();
                       this.view.update(this);
                      },

  plantTree: function() {
               this.tree = new Tree();
             }
};
