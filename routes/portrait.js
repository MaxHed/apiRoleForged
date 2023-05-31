const express = require('express');

module.exports = function(models) {
    const app = express();

    const setup = require("../controllers/portrait");

    const { getPortraitByCharacterId } = setup(models);

    app.get("/:id", getPortraitByCharacterId);

    return app;
}
