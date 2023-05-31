const express = require('express');

module.exports = function(models) {
    const app = express();

    const setup = require("../controllers/campaign");

    const { getCampaign, getAllByUserId } = setup(models);

    app.get("/:id", getCampaign);
    app.get("/list", getAllByUserId);

    return app;
}