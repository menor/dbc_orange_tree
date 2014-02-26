$(function() {
  console.log('document is ready');
  OrangesApp.view = new OrangesApp.View({
    treeDivSelector: "#orange-tree-template"
  });
  OrangesApp.controller = new OrangesApp.Controller({ view: OrangesApp.view });
  new OrangesApp.Binder({
    plantActuatorSelector: "button.plant",
    pickActuatorSelector: "button.pick",
    ageActuatorSelector: "button.age",
  }, OrangesApp.controller).bind();
});

OrangesApp.View = function(opts) {
  this.opts = opts;
};

OrangesApp.View.prototype = {
  update: function(dataSource) {
            this.updateTreeImage(dataSource);
          },

  updateTreeImage: function(dataSource) {
                     if (dataSource.tree) {
                       $(this.opts.treeDivSelector).show();
                     } else {
                       $(this.opts.treeDivSelector).hide();
                     }
                   }
};

OrangesApp.Binder = function(targets, controller) {
  this.targets = targets;
  this.controller = controller;
}

OrangesApp.Binder.prototype = {
  bind: function() {
          this.bindPlantTreeActuator();
          this.bindPickTreeActuator();
          this.bindAgeTreeActuator();
        },

  bindPlantTreeActuator: function() {
                          var controller = this.controller,
                            sel = this.targets.plantActuatorSelector;

                          $(sel).on('click',  function(e){
                            controller.plantActuatorEvent(e);
                          });
                         },

  bindPickTreeActuator: function() {
                          var controller = this.controller,
                            sel = this.targets.pickActuatorSelector;

                          $(sel).on('click',  function(e){
                            controller.pickActuatorEvent(e);
                          });
                        },

  bindAgeTreeActuator: function() {
                          var controller = this.controller,
                            sel = this.targets.ageActuatorSelector;

                          $(sel).on('click',  function(e){
                            controller.ageActuatorEvent(e);
                          });
                       }
}

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
