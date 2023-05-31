const express = require('express');

module.exports = function(models) {
    const app = express();

    const setup = require("../controllers/inventory");

    const { getInventoryByCharacterId } = setup(models);

    app.get("/:CharacterId", getInventoryByCharacterId);

    return app;
}
