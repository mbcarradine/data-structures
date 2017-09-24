var request = require('request');
var fs = require('fs');

// IN MONGO exists a database `AADB` with a collection `meetingaddr`
var dbName = 'AADB'; // name of Mongo database (created in the Mongo shell)
var collName = 'meetingaddr'; // name of Mongo collection (created in the Mongo shell)

//storing the output from last week in a variable, nesting under single object called Addresses
var AddrData = ('{"Addresses":' + fs.readFileSync('week03/zone9mtgs.txt') + '}');


// parsing the data and loading it into a variable
request(AddrData, function(error, response, body) {
    var addrParsed = JSON.parse(AddrData);

    // Connection URL
    var url = 'mongodb://' + process.env.IP + ':27017/' + dbName;

    // Retrieve
    var MongoClient = require('mongodb').MongoClient; 
    MongoClient.connect(url, function(err, db) {
        if (err) {return console.dir(err);}

        var collection = db.collection(collName);

        // Inserting parsed data into Addresses
        collection.insert(addrParsed.Addresses);
        db.close();

    }); //MongoClient.connect

}); //request