var fs = require('fs');
var cheerio = require('cheerio');
var content = fs.readFileSync('data/m09.txt');
var $ = cheerio.load(content);
var request = require('request');
var meetingHold = [];
var dbName = 'aaz9'; // name of Mongo database 
var collName = 'aadata'; // name of Mongo collection 

//**SCRAPING ZONE**

$('div table tbody tr').each(function(i, elem) {
 
//getting group name
 var groupName =  $(elem).find('td').eq(0).text()
                        .split('\n')[2]
                        .replace(/\t\t\t\t  \t    /,"")
                        .replace(/ - Harlem 1 PM Recovery/g,"")
                        .replace(/ - Grupo Nueva Vida/g,"");

//getting group details
var groupDetails = $(elem).find('div.detailsBox').text().trim();

//getting address (from previous code but using "New York, NY this time instead of "NYC" in case I want to split off the state abbreviation)                     
var address= $(elem).find('td').eq(0).text()
                    .split('\n')[3]
                    .replace (/ 1st Floor Conference Room/," New York, NY") // some clunky cleaning for gmaps api
                    .replace (/ 1st Floor Dining Room/," New York, NY")
                    .replace (/ 1st Floor/,"New York, NY")
                    .replace (/ Cafeteria/,"")
                    .trim();

//getting address desc
var addressDesc= $(elem).find('td').eq(0).text()
                        .split('\n')[4]
                        .split('NY')[0]
                        .split(') ')[0]
                        .replace(/[{()}]/g, '')
                        .replace(/\t\t\t\t\t\t/g,"");
 
 //getting zip                     
var zip= $(elem).find('td').eq(0).text()
                .split('\n')[4]
                .replace (/@ Madison Avenue/,"")
                .replace(/\(|\)/g, "")
                .replace(/ /,"")
                .split("NY ")
                .pop()
                .replace (/NY/g,"")
                .trim();
            
//getting meet type code
// var meetTypeCode = $(elem).find('td').eq(1).html()
//                  .replace(/>\s+</g, "><")
//                  .trim()
//                  .split('From')[1]
//                  .split('= ')[0]
//                  .split('</b>')[3];

var accessibility = $(elem).text().includes('Wheelchair access');                  

//loading a var with days, times and meet types. will iterate through in a loop below
var DaysTimes = $(elem).find('td').eq(1).text()
                       .replace('\r\n                    \t\t\r\n\t\t\t\t\t', '')
                       .replace(/[\r\n\t\/]/g, '')
                       .replace(/(<br>)/g, '')
                       .replace(/(<b>)/g, '')
                       .replace(/:/g, '')
                       .replace(/ PM/g, '') //I know I need to convert this to military time. This only works because all of my zone mtgs are in PM.
                       .split('                                               ');
                      
//setting loop to run based on the length of DaysTimes var content
for(var j=0;j<DaysTimes.length;j++){

var meeting = { "GroupName": groupName,
"GroupDetails" : groupDetails,
"Address" : address, 
"AddressDescription" : addressDesc,
"Zip" : zip,
"Day" : DaysTimes[j].substring(0,DaysTimes[j].indexOf("Meeting Type")).split("From")[0].trim(),
"Starts" : DaysTimes[j].substring(0,DaysTimes[j].indexOf("Meeting Type")).split("From")[1].split("to")[0].trim(),
"Ends" : DaysTimes[j].substring(0,DaysTimes[j].indexOf("Meeting Type")).split("From")[1].split("to")[1].trim(),
"MeetingTypeCode" : DaysTimes[j].substring(0,DaysTimes[j].indexOf(" = ")).split("Meeting Type ")[1].trim(),
"WheelchairAccess" : accessibility
};
 meetingHold.push(meeting);
}
fs.writeFileSync('week0506/aaDB.json', JSON.stringify(meetingHold)); 

//**Console.log ZONE**

//console.log(meeting);
//console.log(meetingHold);
//console.log(meeting);
 // console.log(DaysTimes);     
//  console.log(addressDesc);
// console.log(zip);
//  console.log(groupDetails);
//  console.log(times);
//console.log(endTime);
//console.log(meetTypeCode);
//  console.log(meetDays);


//***BEGIN SECTION WHERE I LOAD DATA INTO A MONGO DB***

var meetingData = ( fs.readFileSync('week0506/aaDB.json'));

// parsing the data and loading it into a variable
request(meetingData, function(error, response, body) {
    var dataParsed = JSON.parse(meetingData);

    // Connection URL
    var url = 'mongodb://' + process.env.IP + ':27017/' + dbName;

    // Retrieve
    var MongoClient = require('mongodb').MongoClient; 
    MongoClient.connect(url, function(err, db) {
        if (err) {return console.dir(err);}

    var collection = db.collection(collName);

        // Inserting parsed data
        collection.insert(dataParsed);
        db.close();

    }); //MongoClient.connect

}); //request

});
