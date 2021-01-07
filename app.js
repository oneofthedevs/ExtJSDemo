Ext.onReady(() => {
  Ext.application({
    requires: ["Ext.container.Viewport"],
    name: "User",
    controllers: ["UserController"],
    launch: function () {
      alert("Hello");
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
});
