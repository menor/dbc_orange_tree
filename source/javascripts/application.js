$(function() {
  OrangesApp.view = new OrangesApp.View({
    treeDivSelector: "#orange-tree-template",
    ageDisplaySelector: "p.age",
    fruitCountDisplaySelector: "p.fruit-count",
    orangesImagesContainer: ".display-tree-big div"
  });
  OrangesApp.controller = new OrangesApp.Controller({ view: OrangesApp.view });
  new OrangesApp.Binder({
    plantActuatorSelector: "button.plant",
    pickActuatorSelector: "button.pick",
    ageActuatorSelector: "button.age"
  }, OrangesApp.controller).bind();
});
