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

