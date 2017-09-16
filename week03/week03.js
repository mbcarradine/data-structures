var fs = require('fs');
var cheerio = require('cheerio');
//load m09.txt into variable
var content = fs.readFileSync('data/m09.txt');

//loading content into $
var $ = cheerio.load(content);
var request = require('request');
var async = require('async');

//Setting environment variables
var apiKey = process.env.api_key;
var meetingsData = [];
var addresses=[];


$('table').eq(2).find('tbody tr').each(function(i, elem) { //addresses reside inside of a table within tbody 
        
         var addr = $(elem).find('td').eq(0) //finding data cells and iterating 
         .contents() //getting children of td
         .filter(function(){ return this.nodeType == 3;})  // getting only text nodes. Cleaner than my week02 method.
         .eq(2) 
         .text()
         .trim()
         .replace (/ 1st Floor Conference Room/,"+NYC") // some clunky cleaning for gmaps api
         .replace (/ 1st Floor Dining Room/,"+NYC")
         .replace (/ 1st Floor/,"+NYC")
         .replace (/ Cafeteria/,"")
         .replace (/ /,"+")
         .replace (/ /,"+")
         .replace (/ /,"+")
         .replace (/,/g,"")
         .replace (/ /,"")
         .trim(); //trim space
         
        addresses.push(addr)}); //pushing into array
        console.log(addresses); //

// eachSeries in the async module iterates over an array and operates on each item in the array in series
async.eachSeries(addresses, function(value, callback) {
    var apiRequest = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + value.split(' ').join('+') + '&key=' + apiKey;
    
    var thisMeeting = new Object;
    thisMeeting.address = value;
    request(apiRequest, function(err, resp, body) {
        if (err) {throw err;}
        thisMeeting.latLong = JSON.parse(body).results[0].geometry.location;
        meetingsData.push(thisMeeting);
    });
    setTimeout(callback, 2000);
}, function() {
    fs.writeFileSync('week03/zone9mtgs.txt',JSON.stringify(meetingsData), 'UTF8');
    console.log(meetingsData);
   
});