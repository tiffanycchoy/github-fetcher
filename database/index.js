const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/githubfetcher', function(err) {
  if (err) {
    console.log('error connecting to the db ', err);
  } else {
    console.log('successful connection to db');
  }
});


var githubSchema = mongoose.Schema ({
  username: String,
  avatar: String,
  repositoryName: String,
  repositoryURL: String,
  repositoryDescription: String,
  numberForks: Number,
  dateCreated: Date
})

var githubModel = mongoose.model('githubModel', githubSchema);


// let repoSchema = mongoose.Schema({
//   // TODO: your schema here!
// });
//
// let Repo = mongoose.model('Repo', repoSchema);
//
// let save = (/* TODO */) => {
//   // TODO: Your code here
//   // This function should save a repo or repos to
//   // the MongoDB
// }

// module.exports.save = save;
