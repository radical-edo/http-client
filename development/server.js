'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.all('/api/test', function (req, res) {
  res.send({
    headers: req.headers,
    body: req.body,
    method: req.method
  });
});

app.listen(3000, function () {
  console.log('server listenting on:', 3000);
});
