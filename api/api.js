const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const mapRoutes = require('express-routes-mapper');
const http = require('http');

const config = require('../config/');
const environment = process.env.NODE_ENV;

const db = require('../models/index');

const app = express();
const server = http.Server(app);
const mappedOpenRoutes = mapRoutes(config.publicRoutes, 'api/controllers/');

// allow cross origin requests
// configure to only allow requests from certain origins
app.use(cors());

// parsing the request bodys
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// fill routes for express application
app.use('/', mappedOpenRoutes);

server.listen(config.port, async () => {
    console.log(`Server is listening on port ${config.port}`);
    try {
        await db.sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    return db;
});
