// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  all: function() {
    var queryString = "SELECT * FROM burger_db;";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(req) {
    var queryString = "INSERT INTO burgers_db (name, devoured) VALUES (??)";
    
    connection.query(queryString, req, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  update: function(id, value) {
    var queryString = "UPDATE burgers_db SET ? WHERE id = id";
    connection.query(queryString, id, value, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;