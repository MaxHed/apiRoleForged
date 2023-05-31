const express = require('express');

module.exports = function(models) {
    const app = express();

    const setup = require("../controllers/inventory");

    const { getInventoryByCharacterId, getItemsInInventory } = setup(models);

    app.get("/:CharacterId", getInventoryByCharacterId);
    app.get("/ItemsList", getItemsInInventory);

    return app;
}
