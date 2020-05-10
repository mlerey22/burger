// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  all: function() {
    var queryString = "SELECT * FROM burger_db;";
    connection.query(queryString, function(err, data) {
      if (err) {
        throw err;
      }
      res.render("index", { burgers: data });
    });
  },
  create: function(req) {
    var queryString = "INSERT INTO burgers_db";
    
    connection.query(queryString, function(err, data) {
      if (err) {
        throw err;
      }

      res.render("index", { burgers: data });
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  update: function(id) {
    var queryString = "UPDATE burgers_db SET ? WHERE id";
    connection.query(queryString, function(err, data) {
      if (err) {
        throw err;
      }

      res.render("index", { burgers: data });
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;