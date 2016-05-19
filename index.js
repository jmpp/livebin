'use strict';

require('colors')
const http    = require('http')
const path    = require('path')
const express = require('express')
const morgan  = require('morgan')

const port    = 3000;
const app     = express();
const server  = http.createServer(app);
const io      = require('socket.io')(server)

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'public'))
app.use(morgan('dev')) // Logger middleware

// Serving static files from /public/ and /bower_components/
app.use(express.static(path.join(__dirname, 'public')));
app.use('/vendor', express.static(path.join(__dirname, 'bower_components')));

app.use(require('./router.js'))
require('./sockets.js')(io);

// Launching server
server.listen(port, () => { console.log(`Server listening on port ${port}`.green) })