'use strict';

const express = require('express');
const server = express();


const port = 3001;
const app = require('./config/server');

app.use('/vjobs', express.static(__dirname + '/app/static')); //server.use
app.get('/', async (req, res) => {
    return res.redirect('http://localhost:'+port+'/vjobs/index.html');
})
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

