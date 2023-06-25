// DEPENDENCIES
const express = require("express");


// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (request, response) => {
  response.send("Welcome to Express Lab Home Page!");
});
// app.get("/rocks/:index", (request, response) => {
//   // response.send(rocks);
//   // response.send(request.params)
//   response.send(rocks[request.params.index])
// });

// EXPORT
module.exports = app;