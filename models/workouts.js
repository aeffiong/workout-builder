// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Workouts = sequelize.define("workouts", {
  upper_body: Sequelize.STRING,
  lower_body: Sequelize.STRING,
  core: Sequelize.STRING,
  cardio: Sequelize.STRING,
  });

// Syncs with DB
Workouts.sync({force: true}).then(() => {
  return Workouts.create({
    upper_body: 'Push ups',
    lower_body: 'Squats',
    core: 'Plank',
    cardio: 'Jumping Jacks',
  })
});

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Workouts;