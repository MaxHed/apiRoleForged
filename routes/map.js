const express = require('express');

module.exports = function(models) {
    const app = express();

    const setup = require("../controllers/map");

    const { getMap, getAllByUserId } = setup(models);

    app.get("/:id", getMap);
    app.get("/list", getAllByUserId);

    return app;
}
