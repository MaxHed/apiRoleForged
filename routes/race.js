const express = require('express');

module.exports = function(models) {
    const app = express();

    const setup = require("../controllers/race");

    const { getRace, getAll , create} = setup(models);

    app.get("/:id", getRace);
    app.get("/", getAll);
    app.post("/", create);

    return app;
}
