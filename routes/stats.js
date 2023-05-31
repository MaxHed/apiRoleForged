const express = require('express');

module.exports = function(models) {
    const app = express();

    const setup = require("../controllers/stats");

    const { getStatsByCharacterId } = setup(models);

    app.get("/:id", getStatsByCharacterId);

    return app;
}
