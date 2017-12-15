var express = require('express'),
app = express();
var fs = require('fs');
var moment = require('moment-timezone');

var dbName = 'Max'; // name of Mongo database 
var collName = 'meetings'; // name of Mongo collection 

// Mongo
 //var url = 'mongodb://' + process.env.IP + ':27017/' + dbName;

var url = 'mongodb://carradim:E0HlnqMYBP8fHn7v@cluster0-shard-00-00-rzdcl.mongodb.net:27017,cluster0-shard-00-01-rzdcl.mongodb.net:27017,cluster0-shard-00-02-rzdcl.mongodb.net:27017/max?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';

var index1 = fs.readFileSync("index1.txt");
var index3 = fs.readFileSync("index3.txt");

var MongoClient = require('mongodb').MongoClient;


//var d = (moment.tz(new Date(), "America/New_York"));
var d =  new Date();

var weekday = new Array(7);
weekday[0] =  "Sundays";
weekday[1] = "Mondays";
weekday[2] = "Tuesdays";
weekday[3] = "Wednesdays";
weekday[4] = "Thursdays";
weekday[5] = "Fridays";
weekday[6] = "Saturdays";


//var whatisToday = weekday[d()];
var whatisToday = weekday [(moment.tz(new Date(), "America/New_York").days())];
//var whatisToday = weekday[d.getDay()];

var tomorrow;
if (whatisToday == 6) {
    tomorrow = 0;
}
else {
    tomorrow = weekday[d.getDay() + 1];

}

//var tomorrow=parseInt("tomorrowraw");

//console.log(moment.tz(new Date(), "America/New_York").hours());
var hour = (moment.tz(new Date(), "America/New_York").hours())
//var hour = d.getHours() -5;
        if (hour < 0) { hour = hour+24 }
        hour = hour*100;

console.log(moment.tz(new Date(), "America/New_York").days());
console.log (whatisToday);
console.log(moment.tz(new Date(), "America/New_York").hours());
//console.log (whatisToday);
console.log (hour);
console.log (tomorrow);
//console.log (d);

app.get('/aa', function(req, res) {
   MongoClient.connect(url, function(err, db) {
        if (err) {return console.dir(err);}

                                                     var collection = db.collection(collName);


//start mongo aggregation
        collection.aggregate([
{ $match :
{ $or : [{
      day : whatisToday, startTime : { $gt : hour }}
,
    { day : tomorrow, startTime : { $lt : 500 }}
        ]}


},

            { $group :
            {
                _id : { meetingAddress : "$address"},
                  meetingGroups : { $push :
                  {
                meetingName : "$groupName",
                meetingAddress : "$address",
                meetingAddress2 : "$addressDescription",
                meetingDetails : "$groupDetails",
                meetingWheelchair : "$WheelchairAccess",
                meetingType  : "$MeetingTypeCode",
                meetingDay : "$day",
                meetingStartTime : "$startTime",
                meetingTimes: "$startEnd",
                latLong : "$latLong"
                }
               }
            }
          }



   ]).toArray(function(err, docs) { // end of aggregation pipeline
   if (err) {console.log(err)}
              else {
                res.writeHead(200, {'content-type': 'text/html'});
                res.write(index1);
                res.write(JSON.stringify(docs));
                res.end(index3);
        }
            db.close();
        });
    });

});

//console.log(moment.tz(new Date(), "America/New_York").days());
//console.log(moment.tz(new Date(), "America/New_York").hours());

//listener
app.listen(3002, function() {
    console.log('Server listening...');
setTimeout(function(){
process.exit(0);
}, 60 * 60 * 1000);

});

