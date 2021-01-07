Ext.define("ExtJS.view.UserGrid", {
  extend: "Ext.grid.Panel",
  alias: "widget.UserGrid",
  id: "userGrid",
  config: {},
  constructor: function (config) {
    this.initConfig(config);
    return this.callParent(arguments);
  },
  width: "100%",
  height: 400,
  sellType: "checkboxmodel",
  title: "User Information",
  sellModel: {
    mode: "MULTI",
  },
  viewConfig: {
    stripRows: true,
  },
  initComponent: function () {
    Ext.apply(this, {
      store: "ExtJS.store.UserStore",
      plugins: [
        // Ext.create("Ext.grid.plugin.RowEditing", {
        //   clicksToEdit: 2,
        // }),
      ],
      columns: [
        {
          text: "Id",
          dataIndex: "UserId",
        },
        {
          text: "First Name",
          dataIndex: "FirstName",
        },
        {
          text: "Last Name",
          dataIndex: "LastName",
        },
        {
          text: "Email",
          dataIndex: "Email",
        },
        {
          text: "Phone No.",
          dataIndex: "Phone Number",
        },
        {
          text: "Linkedin Id",
          dataIndex: "LinkedinId",
        },
        {
          text: "Date of birth",
          dataIndex: "DOB",
        },
      ],
      dockedItems: [
        {
          xtype: "toolbar",
          dock: "buttom",
          ui: "footer",
          layout: {
            pack: "center",
          },
          defaults: {
            minWidth: 80,
          },
          items: [
            {
              text: "Create",
              itemId: "btnCreate",
            },
            {
              text: "Delete",
              itemId: "btnDelete",
            },
          ],
        },
      ],
    });
    this.callParent(arguments);
  },
});
