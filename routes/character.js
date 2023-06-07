const express = require('express');

module.exports = function(models) {
    const app = express();

    const setup = require("../controllers/character");

    const { getCharacter, getAllByUserId , create, edit} = setup(models);

    app.get("/:id", getCharacter);
    app.get("/listByUID", getAllByUserId);
    app.post("/", create);
    app.put("/", edit);

    return app;
}