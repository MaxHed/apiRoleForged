const express = require('express');;

module.exports = function(models) {
    const app = express();

    const setup = require('../controllers/user');

    const { getUser, getAll, getById, changeUserToAdmin } = setup(models);

    app.get("/me", getUser);
    app.get("", getAll);
    app.get("/:id", getById);
    app.post("/changeToAdmin", changeUserToAdmin);

    return app;
}