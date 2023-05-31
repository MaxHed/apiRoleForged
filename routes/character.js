const express = require('express');

module.exports = function(models) {
    const app = express();

    const setup = require("../controllers/character");

    const { getCharacter, getAllByUserId } = setup(models);

    app.get("/:id", getCharacter);
    app.get("/list", getAllByUserId);

    return app;
}