const express = require('express');;

module.exports = function(models) {
    const app = express();

    const setup = require('../controllers/auth');

    const { signup, login, logout, getToken } = setup(models);

    app.post("/signup", signup);
    app.post("/login", login);
    app.post("logout", logout);
    app.get("/getToken", getToken);

    return app;
}