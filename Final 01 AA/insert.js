var fs = require('fs');

var meetings = JSON.parse(fs.readFileSync('finaldata.json'));
//var dbName = 'AADBfinal'; // name of local Mongo database 

   var url = 'mongodb://' + process.env.IP + ':27017/' + dbName;


// Retrieve
var MongoClient = require('mongodb').MongoClient; // npm install mongodb

MongoClient.connect(url, function(err, db) {
    if (err) {return console.dir(err);}

    var collection = db.collection('meetings');

    // THIS IS WHERE THE DOCUMENT(S) IS/ARE INSERTED TO MONGO:
    collection.insert(meetings);
    db.close();

}); //MongoClient.connect