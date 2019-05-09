const express = require('express');

const app = express();
var mysql = require('mysql');
const myConnection = require('express-myconnection');

// importing routes
const routes = require('./routes');

app.use(myConnection(mysql, {
  host: 'localhost', 
  user: 'root', 
  port: 3306, 
  database: 'clientes'
}, 'single'));

// routes
app.use('/routes', routes);

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);