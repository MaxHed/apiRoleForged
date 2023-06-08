const express = require('express');

module.exports = function(models) {
    const app = express();

    const setup = require("../controllers/job");

    const { getJob, getAll, create, edit} = setup(models);

    app.get("/:id", getJob);
    app.get("/", getAll);
    app.post("/", create);
    app.put("/", edit);

    return app;
}
