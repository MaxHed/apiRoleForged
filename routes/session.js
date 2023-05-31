const express = require('express');

module.exports = function(models) {
    const app = express();

    const setup = require("../controllers/session");

    const { getSession, getAllByCampaignId, getCharactersInSession } = setup(models);

    app.get("/:id", getSession);
    app.get("/list", getAllByCampaignId);
    app.get("/SessionGroup", getCharactersInSession);

    return app;
}
