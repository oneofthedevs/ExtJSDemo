Ext.application({
  requires: ["Ext.container.Viewport"],
  name: "ExtJS",
  controllers: ["ExtJS.controller.UserController"],
  launch: function () {
    alert("Hello from app launch");
    Ext.create("Ext.container.Viewport", {
      layout: "anchor",
      items: [
        {
          xtype: "userGrid",
        },
      ],
    });
  },
});
