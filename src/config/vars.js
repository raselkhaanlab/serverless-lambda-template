// import .env variables
require("dotenv-safe").config();

module.exports = {
  env: process.env.NODE_ENV,
  serviceName: "serverless-lambda-template",
  http: {
    // Axios configuration to make http call
    timeout: 20000, // Timeout in ms
    responseType: "json",
    responseEncoding: "utf8",
  },
};
