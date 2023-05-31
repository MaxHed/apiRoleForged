const express = require('express');

module.exports = function(models) {
    const app = express();

    const setup = require("../controllers/item");

    const { getItem, getAll } = setup(models);

    app.get("/:id", getItem);
    app.get("/list", getAll);

    return app;
}