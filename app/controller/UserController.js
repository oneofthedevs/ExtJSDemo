Ext.define("ExtJS.controller.UserController", {
  extend: "Ext.app.Controller",
  models: ["ExtJS.model.User"],
  stores: ["ExtJS.store.UserStore"],
  views: ["ExtJS.view.UserGrid"],
  refs: [
    {
      ref: "userGrid",
      selector: "viewport UserGrid",
    },
  ],
  init: function () {
    alert("Hello init from controller");
    this.control({
      "viewport > UserGrid button[itemId=btnCreate]": {
        click: this.onCreateClick,
      },
      "viewport > UserGrid button[itemId=btnDelete]": {
        click: this.onDeleteClick,
      },
    });
  },
  onCreateClick: function () {},
  onDeleteClick: function () {},
});
