const jwt = require('jsonwebtoken');
var express = require('express')

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    
    const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
    const userId = decodedToken.id;

    // console.log(token);
    if (token == "" || token == null) {
    //   throw 'Invalid Token';
      res.status(403).json({
        message: 'Invalid Token! ' + token
      });
    } else {
      next();
    }
  } catch(err) {
    const { message, name } = err;
    res.status(401).json({
        message: 'Invalid Token! ' + req.headers.authorization,

    });
  }
};