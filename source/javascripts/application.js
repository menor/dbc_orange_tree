$(function() {
  var eventingSelectors = {
    plantActuatorSelector: "button.plant",
    pickActuatorSelector: "button.pick",
    ageActuatorSelector: "button.age"
  };

  OrangesApp.view = new OrangesApp.View({
    treeDivSelector: "#orange-tree-template",
    ageDisplaySelector: "p.age",
    fruitCountDisplaySelector: "p.fruit-count",
    orangesImagesContainer: ".display-tree-big div"
  });

  OrangesApp.controller = new OrangesApp.Controller({ view: OrangesApp.view });
  new OrangesApp.Binder(eventingSelectors, OrangesApp.controller).bind();
  OrangesApp.view.eventingSelectors = eventingSelectors;
});
