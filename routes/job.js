const express = require('express');

module.exports = function(models) {
    const app = express();

    const setup = require("../controllers/job");

    const { getJob, getAll } = setup(models);

    app.get("/:id", getJob);
    app.get("/list", getAll);

    return app;
}
