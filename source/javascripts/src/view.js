$(function() {
  console.log('document is ready');
  OrangesApp.view = new OrangesApp.View({
    treeDivSelector: "#orange-tree-template"
  });
  OrangesApp.controller = new OrangesApp.Controller({ view: OrangesApp.view });
  new OrangesApp.Binder({
    plantActuatorSelector: "button.plant"
  }, OrangesApp.controller).bind();
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

OrangesApp.Binder = function(targets, controller) {
  this.targets = targets;
  this.controller = controller;
}

OrangesApp.Binder.prototype = {
  bind: function() {
          this.bindPlantTreeActuator();
        },

  bindPlantTreeActuator: function() {
                          var controller = this.controller,
                            sel = this.targets.plantActuatorSelector;

                          $(sel).on('click',  function(e){
                            controller.plantActuatorEvent(e);
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

  plantTree: function() {
               this.tree = new Tree();
             }
};
