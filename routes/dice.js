const express = require('express');;

module.exports = function(models) {
    const app = express();

    const setup = require('../controllers/dice');

    const { getResultDice} = setup(models);

    app.get("/:dice", getResultDice);

    return app;
}