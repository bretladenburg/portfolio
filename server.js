'use strict';

const express = require('express');

const app = express();

const bodyParser = require('body-parser').urlencoded();

const PORT = process.env.PORT || 3000;

const githubToken = process.env.GITHUB_TOKEN;

app.use(express.static('./public'));

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.get('/github/*', proxyGitHub);

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
