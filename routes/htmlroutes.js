var path = require("path");

module.exports = function (app) {
    // Index Route
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "index.html"));
    });
    // Stats Route
    app.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "stats.html"));
    });
    // Exercise Route
    app.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "exercise.html"));
    });
};