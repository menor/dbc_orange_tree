OrangesApp.Controller = function(config) {
  this.view = config.view;
};

OrangesApp.Controller.prototype = {
  plantActuatorEvent: function(e) {
                        if (!this.tree){ this.plantTree() }
                        this.view.update(this);
                      },

  pickActuatorEvent: function(e) {
                       this.tree.pickOrange();
                       this.view.update(this);
                      },

  ageActuatorEvent: function(e) {
                       this.tree.grow();
                       if (!this.tree.isAlive) {
                         this.tree = null;
                       }
                       this.view.update(this);
                      },

  plantTree: function() {
               this.tree = new Tree();
             }
};
