const express = require('express');

module.exports = function(models) {
    const app = express();

    const setup = require("../controllers/race");

    const { getRace, getAll } = setup(models);

    app.get("/:id", getRace);
    app.get("/list", getAll);

    return app;
}
