var Workouts = require("../models/workouts.js");

module.exports = function(app) {

  // Get all workouts
  app.get("/api/all", function(req, res) {
    Workouts.findAll({}).then(function(results) {
      res.json(results);
    });

  });

  // Add a workout
  app.post("/api/new", function(req, res) {

    console.log("Workout Data:");
    console.log(req.body);

    Workouts.create({
      lower_body: req.body.lower_body,
      upper_body: req.body.upper_body,
      core: req.body.core,
      cardio: req.body.cardio,
      created_at: req.body.created_at
    }).then(function(results) {
      res.end();
    });

  });

  app.get('/posts', (req, res) => {
    res.send(
      [{
        title: "Hello World!",
        description: "Hi there! How are you?"
      }]
    )
  })

};