const jwt = require('jsonwebtoken');
var express = require('express')

module.exports = async (req, res, next) => {
   
  // get header authorization cookie 
  const authToken = req.headers.authorization ;
  const token = req.cookies.token || authToken;

    console.log(token);
    jwt.verify(token, process.env.SECRET_TOKEN, (err, decodedToken) => {
      console.log(decodedToken);
      if (err) {
        res.clearCookie("token");
        return res.sendStatus(401);
      }
      next();
    })

  };