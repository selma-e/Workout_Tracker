const db = require("../models");

module.exports = function (app) {
    app.get("/api/workouts/range", (req, res) => {
        db.workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/api/workouts", (req, res) => {
        db.workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    // db.workout.aggregate([
    //     {
    //       $exercise: {
    //         duration: { $sum: "$quizzes"},

    //         examTotal: { $sum: [ "$final", "$midterm" ] }
    //       }
    //     }
    //  ])
};