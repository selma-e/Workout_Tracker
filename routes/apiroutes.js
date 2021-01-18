const db = require("../models");

module.exports = function (app) {
    app.get("/api/workouts/range", (req, res) => {
        db.workout.find({})
            .sort([
                ["day", -1]
            ])
            .limit(7)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/api/workouts", (req, res) => {
        db.workout.find({})
            .sort([
                ["day", -1]
            ])
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.post('/api/workouts', (req, res) => {
        db.workout.create(req.body)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.put('/api/workouts/:id', (req, res) => {
        const id = req.params.id;
        console.log(req.body);
        db.workout.findByIdAndUpdate(id, {
                $push: {
                    exercises: req.body
                }
            }).then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });
};