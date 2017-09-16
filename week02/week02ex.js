// npm install cheerio

var fs = require('fs');
var cheerio = require('cheerio');

// load the thesis text file into a variable, `content`
var content = fs.readFileSync('data/thesis.txt');

// load `content` into a cheerio object. Dollar sign is a selector.
var $ = cheerio.load(content);

// print names of thesis students
$('h3').each(function(i, elem) {
    console.log($(elem).text());
});

// print project titles. he's using a hierarchy, looking for stuff in project, then in title
$('.project .title').each(function(i, elem) {
    console.log($(elem).text());
});
