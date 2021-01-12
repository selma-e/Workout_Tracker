module.exports = function (app) {
    app.get("/exercise", (req, res) => {
        db.exercise.find({})
            .then(dbExercise => {
                res.json(dbExercise);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/workout", (req, res) => {
        db.workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/populatedworkout", (req, res) => {
        db.workout.find({})
            .populate("exercise")
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });
};