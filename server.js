require('dotenv').config();
const express = require('express');
const db = require('./db');
const api = require('./api');
const app = express();


const http = require('http');
const httpServer = http.createServer(app);
const res = require("express/lib/response");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const chat = require("./chat");

const { 
  env: { 
  HTTP_BIND_PORT = 8080,
  HTTP_BIND_ADDRESS = '127.0.0.1' 
}
} = process;

// Gestion des erreurs de CORS
app.use((req, res, next) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Analyse du corps de la requête HTTP
app.use(bodyParser.json());

// Analyse du cookie HTTP
app.use(cookieParser());

db.setup().then((models) => {
    api.init(app, models);
    chat.init(httpServer, models);
    httpServer.listen(HTTP_BIND_PORT, HTTP_BIND_ADDRESS , () => {
        console.log(`Listening on ${HTTP_BIND_ADDRESS}:${HTTP_BIND_PORT}`)
    })
});