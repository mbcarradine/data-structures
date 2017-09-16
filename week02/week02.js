console.log('Here are the meeting addresses in Manhattan: ')
var fs = require('fs');
var cheerio = require('cheerio');
//load m09.txt into variable
var content = fs.readFileSync('data/m09.txt');

//loading content into $
var $ = cheerio.load(content);

$('table').find('tbody tr').each(function(i, elem) { //addresses reside inside of a table within tbody 
         var addr = $(elem).find('td').eq(0) //finding data cells
         .contents() //getting children of td
         .eq(6) //index where address is found
         .text()
         .replace (/,/g, "") //get rid of the commas in case i want to load this into a csv
         .trim(); //trim space
   
    //print addresses
        console.log(addr);
});
