'use strict';

const express = require('express');

const app = express();

const bodyParser = require('body-parser').urlencoded();

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/', function (request, response){
  response.sendFile('public/index.html'), {root: '.'};
});

app.post('/articles', bodyParser, function(request, response) {

  console.log(request.body);
  response.send('Record posted to server!!');
})

app.listen(PORT, function() {
  console.log(`our server is running on port: ${PORT}`);
});
