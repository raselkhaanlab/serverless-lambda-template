require("module-alias/register");

// define all the routes/handlers
const helloRoute = require("./handler/v1/hello");

module.exports = {
  hello: helloRoute,
};
