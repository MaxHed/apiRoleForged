const express = require('express');

module.exports = function(models) {
    const app = express();

    const setup = require("../controllers/job");

    const { getJob, getAll, create} = setup(models);

    app.get("/:id", getJob);
    app.get("/", getAll);
    app.post("/", create);

    return app;
}
