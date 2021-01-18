const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String
        },
        name: {
            type: String
        },
        duration: {
            type: Number
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        }
    }]
}, {
    toJSON: {
        virtuals: true
    }
});

workoutSchema.virtual('totalDuration').get(function () {
    return this.exercises.reduce((sum, exercise) => sum + exercise.duration, 0);
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;