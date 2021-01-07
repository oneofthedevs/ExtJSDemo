const URL = "http://localhost:55625/api/Home/";

Ext.define("ExtJS.model.User", {
  extend: "Ext.data.Model",
  idProperty: "UserId",
  fields: [
    { name: "UserId", type: "int" },
    { name: "First Name", type: "string" },
    { name: "Last Name", type: "string" },
    { name: "Email", type: "string" },
    { name: "Phone Number", type: "string" },
    { name: "LinkedinId", type: "string" },
    { name: "City", type: "int" },
    { name: "Country", type: "int" },
  ],
  proxy: {
    type: "ajax",
    reader: {
      root: "data",
      type: "json",
    },
    api: {
      read: `${URL}GetAllUsers`,
      create: `${URL}InsertUser`,
      update: `${URL}UpdateUser`,
      delete: `${URL}DeleteUser`,
    },
    actionMethods: {
      read: "GET",
      create: "POST",
      update: "PATCH",
      delete: "DELETE",
    },
  },
});
