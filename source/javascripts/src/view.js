$(function() {
  console.log('document is ready');
  OrangesApp.view = new OrangesApp.View({
    treeDivSelector: "#orange-tree-template"
  });
  OrangesApp.controller = new OrangesApp.Controller({ view: OrangesApp.view });
  OrangesApp.Binder.bind({
    plantActuatorSelector: "button.plant"
  }, OrangesApp.controller);
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

OrangesApp.Binder = {
  bind: function(targets, controller) {
          this.bindPlantTreeActuator(targets.plantActuatorSelector, controller);
        },

  bindPlantTreeActuator: function(sel, controller) {
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
                        console.log('clicked button');
                      }
};
