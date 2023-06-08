const express = require('express');

module.exports = function(models) {
    const app = express();

    const setup = require("../controllers/item");

    const { getItem, getAll, create, edit } = setup(models);

    app.get("/:id", getItem);
    app.get("/list", getAll);
    app.post("/", create);
    app.put("/", edit);

    return app;
}
