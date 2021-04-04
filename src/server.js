'use strict';

// 3rd Party Resources
const express = require('express');
const router=require('./router/router.js')
const cors=require('cors');


const notFoundHndler = require('./middleware/404.js');
const errorHandler = require('./middleware/500.js');

// Prepare the express app
const app = express();
app.use(cors);

// Process JSON input and put the data on req.body
app.use(express.json());

// Process FORM input and put the data on req.body
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use('*', notFoundHndler);
app.use(errorHandler);




module.exports = {
    server: app,
    start: (port) => {
      const PORT = port || 8080;
      app.listen(PORT, () => console.log(`Listening on ${PORT}`));
    },
  };