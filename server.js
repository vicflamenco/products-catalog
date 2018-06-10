const port = process.env.PORT || 5000;

const express = require('express');
const serveStatic = require('serve-static');
const favicon = require('serve-favicon');
const path = require('path');

const app = express();

app
    .use(favicon(path.join(__dirname, 'static', 'favicon.ico')))
    .use("/", serveStatic (path.join(__dirname, '/dist')))
    .get('*', function (req, res) {
        res.sendFile(__dirname + '/dist/index.html')
    })
    .listen(port);