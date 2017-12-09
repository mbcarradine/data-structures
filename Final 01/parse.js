var fs = require('fs');
var cheerio = require('cheerio');
var async = require('async');
var request = require('request');
var apiKey = '';
//var dbName = 'Max'; // name of Atlas Mongo database 
//var dbName = 'AADBfinal'; // name of local Mongo database 

//var collName = 'meetings'; // name of Mongo collection 
var allcontent = [];
var meetingHold = [];


//looping in scraped txt files for parsing
for(var i=1; i<11; i++){
  if(i<10)
  {
    getFile(i);
  }
  else{
    getFile(10);
  }
}

function getFile(zonefile){
    allcontent = fs.readFileSync('/home/ubuntu/workspace/final01/files/m' + zonefile + '.txt');
    parser(allcontent);
    
}

function parser(content){

var $ = cheerio.load(content);


$('div table tbody tr').each(function(i, elem) {
        
var data = $(elem).find('td')
                    .eq(1)
                    .html()
                    .replace('\r\n                    \t\t\r\n\t\t\t\t\t', '')
                    .split('<br>\r\n                    \t<br>');


//setting loop
    for (var i=0; i < data.length; i++) {
         if (data[i] != '') {
        
           // get groupName
        var groupName = $(elem)
        .find('td')
        .first()
        .find('b')
        .text()
        .split(' -')[0]
        .trim();
       
        
        //get each address
        var address = $(elem)
        .find('td')
        .first()
        .text()
        .replace(/&/g, 'and') //get me out of the midwest
        .split('\n')[3]
        .split(',')[0]
        .split('@')[0]
        .split('- ')[0]
        .split('(')[0]
        .trim();
        
        // get address description
        var addressDesc = $(elem)
        .find('td')
        .first()
        .find('h4')
        .text()
        .split('\n')[0]
        .trim();

        //get group details
        var groupDetails = $(elem).find('div.detailsBox')
        .text()
        .trim();


    

        
var DaysTimes = $(elem).find('td')
                        .eq(1)
                        .text()
                        .replace('\r\n                    \t\t\r\n\t\t\t\t\t', '')
                        .replace(/[\r\n\t\/]/g, '')
                        .replace(/(<br>)/g, '')
                        .replace(/(<b>)/g, '')
                        .trim()
                        .split('                                               ');        
                            
// console.log(DaysTimes);    
 // fs.writeFileSync('daystimes' + '.json', JSON.stringify(DaysTimes, undefined, 4));
   //   fs.writeFileSync('daystimes.txt',JSON.stringify(DaysTimes));

var accessibility = $(elem).text().includes('Wheelchair access');                  

//var meeting = new Object;

      
  for(var j=0;j<DaysTimes.length;j++){

    // get days and times out of DaysTimes


 if(DaysTimes[j].substring(0,DaysTimes[j].indexOf("Meeting Type")).split("From")[1] !== undefined){
 
var meeting = { 
"address" : address + " " + "NYC", 
"groupName": groupName,
"groupDetails" : groupDetails,
"addressDescription" : addressDesc,
"day" : DaysTimes[j].substring(0,DaysTimes[j].indexOf("Meeting Type")).split("From")[0].trim(),
"startEnd" : DaysTimes[j].substring(0,DaysTimes[j].indexOf("Meeting Type")).split("From")[1].trim(),
"starts" : DaysTimes[j].substring(0,DaysTimes[j].indexOf("Meeting Type")).split("From")[1].split("to")[0].trim(),
"startTime" : timeconverter(DaysTimes[j].substring(0,DaysTimes[j].indexOf("Meeting Type")).split("From")[1].split("to")[0].trim().split(" ")),
"ends" : DaysTimes[j].substring(0,DaysTimes[j].indexOf("Meeting Type")).split("From")[1].split("to")[1].trim(),
"endTime" : timeconverter(DaysTimes[j].substring(0,DaysTimes[j].indexOf("Meeting Type")).split("From")[1].split("to")[1].trim().split(" ")),
"MeetingTypeCode" : DaysTimes[j].substring(0,DaysTimes[j].indexOf(" = ")).split("Meeting Type ")[1].trim(),
"WheelchairAccess" : accessibility,
}; 
    meetingHold.push(meeting);   

//***CONSOLE LOG ZONE
//console.log(addressdesc)
//console.log(DaysTimes)


//   meeting.address = address + " NYC";
//       meeting.addressDesc = addressDesc;
//       meeting.groupName = groupName;
//       meeting.groupDetails = groupDetails;
//       meeting.wheelchairAccess = accessibility;                
//         meeting.StartEnd = DaysTimes[j].substring(0,DaysTimes[j].indexOf("Meeting Type")).split("From")[1].trim();
//         meeting.startTime = timeconverter(DaysTimes[j].substring(0,DaysTimes[j].indexOf("Meeting Type")).split("From")[1].split("to")[0].trim().split(" "));
//         meeting.endTime = timeconverter(DaysTimes[j].substring(0,DaysTimes[j].indexOf("Meeting Type")).split("From")[1].split("to")[1].trim().split(" "));
//         meeting.day = DaysTimes[j].substring(0,DaysTimes[j].indexOf("Meeting Type")).split("From")[0].trim();
//         meeting.type =  DaysTimes[j].substring(0,DaysTimes[j].indexOf(" = ")).split("Meeting Type ")[1].trim();
//         meeting.specialInterest = DaysTimes[j].split('Special Interest')[1];
//         meeting.DaysTimes = DaysTimes;
                    }

                }
           }
        }
    }    
  );

function timeconverter(time){
    var hours = time[0].split(":")[0];
    var minutes = time[0].split(":")[1];
    var normaltime = time[1];
    if (normaltime === 'PM' && hours <= 11){
       return  Number(String(Number(hours) + 12) + minutes);
    } else {
        return Number(String(hours) + String(minutes));
    }
}


}
//console.log(meetingHold);

//***** START GOOGLE API BLOCK  


var counter=1; //using a counter to watch api calls

async.eachSeries(meetingHold, function(value, callback) {
  var apiRequest = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + value.address + '&key=' + apiKey;


    request(apiRequest, function(err, resp, body) {
        if (err) { throw err; }
        //console.log(JSON.parse(body));
        
        // Assign latLong data to current meeting object
        if(JSON.parse(body).results[0] != undefined)
        value.latLong = JSON.parse(body).results[0].geometry.location;
        
        counter++;
    });
    
  setTimeout(callback, 500);

  // console.log(meetingHold.length);

    console.log("getting latlong for " + counter + " of " + meetingHold.length);

    // Write the meetingHold data to json
    fs.writeFileSync('finaldata' + '.json', JSON.stringify(meetingHold, undefined, 4));
    

    });




 
 
 