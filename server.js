const port = process.env.PORT || 5000;

const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

app
    .use("/", serveStatic (path.join(__dirname, '/dist')))
    .get('*', function (req, res) {
        res.sendFile(__dirname + '/dist/index.html')
    })
    .listen(port);