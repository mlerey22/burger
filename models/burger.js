var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.all(function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(req, cb) {
      orm.create(req, function(res) {
        cb(res);
      });
    },
    update: function(id, value, cb) {
      orm.update(id, value, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;