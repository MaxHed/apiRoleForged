const jwt = require('jsonwebtoken');
var express = require('express')

module.exports = async (req, res, next) => {
    const token = req.cookies.token
    jwt.verify(token, process.env.SECRET_TOKEN, (err, decodedToken) => {
      if (err) {
        res.clearCookie("token");
        return res.sendStatus(401);
      }
      next();
    })

  };