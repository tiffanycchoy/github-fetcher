const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/githubfetcher', function(err) {
  if (err) {
    console.log('error connecting to the db ', err);
  } else {
    console.log('successful connection to db');
  }
});

var repositorySchema = mongoose.Schema ({
  username: String,
  avatar: String,
  repository: {
    id: Number,
    name: String,
    url: String,
    description: String,
    numberForks: Number,
    dateCreated: Date
  }
})

var Repository = mongoose.model('Repository', repositorySchema);

var save = function(arrData) {
  arrData.forEach(function(item, index) {
    Repository.findOne({
      'repository.id': item.id
    }, function(err, data) {
      if (err) {
        console.log('err retrieving from the db ', err);
      } else {
        if (data === null) {
          //does not exist in db yet
          var repositoryData = new Repository({
            username: item.owner.login,
            avatar: item.owner.avatar_url,
            repository: {
              id: item.id,
              name: item.name,
              url: item.html_url,
              description: item.description,
              numberForks: item.forks_count,
              dateCreated: item.created_at
            }
          });
          repositoryData.save(function(err) {
            if(err) {
              console.log('error saving to the database ', err);
            } else {
              console.log('successfully saved to the database');
            }
          });
        }
      }
    })
  })
}

var retrieve = function(callback) {
  Repository.find({}, function(err, data) {
    if (err) {
      console.log('error retrieving from the database');
      callback(err, null);
    } else {
      console.log('successfully retrieved from the database ');
      callback(null, data);
    }
  })
}


module.exports.save = save;
module.exports.retrieve = retrieve;
