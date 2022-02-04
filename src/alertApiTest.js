var SwaggerJsClient = require("swagger-js-client");

var api = new SwaggerJsClient.AlertApi();
var id = "id_example"; // {String} Resource identifier

var callback = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully.");
  }
};
api.deleteAlertItem(id, callback);
