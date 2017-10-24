const express = require('express');
let app = express();
var bodyParser = require('body-parser');
var database = require('../database/index.js');
var githubHelper = require('../helpers/github.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }))


app.post('/repos', function (req, res) {
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  var username = req.body.username;
  var retrievedRepos = githubHelper.getReposByUsername(username, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var info = JSON.parse(body);
      database.save(info);
    }
  });
});


app.get('/repos', function (req, res) {
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
