const express = require('express');

module.exports = function(models) {
    const app = express();

    const setup = require("../controllers/purse");

    const { getPurseByCharacterId } = setup(models);

    app.get("/:CharacterId", getPurseByCharacterId);

    return app;
}
