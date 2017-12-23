var express = require('express');
var app = express();
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://mongo:27017/nodeapp', {
    useMongoClient: true
});

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
    name    : String
});

var User = mongoose.model("User", UserSchema);

app.get('*', function(req, res){
    User.find(function(err, users) {
         if (err)
            res.send(err);

         res.json(users);
    });
});

app.listen(3000, function () {
  console.log('Nodeapp port: 3000!')
})