var Sequelize = require("sequelize");

var sequelize = new Sequelize("workoutbuilder_db", "root", "root", {
    host: "localhost",
    port: 3307,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });
  
  module.exports = sequelize;