var request = require('request'); //load module with npm request
var fs = require('fs');


request('http://visualizedata.github.io/datastructures/data/m01.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/final01/files/m1.txt', body);
  }
  else {console.error('problems!')}
});

request('http://visualizedata.github.io/datastructures/data/m02.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/final01/files/m2.txt', body);
  }
  else {console.error('problems!')}
});

request('http://visualizedata.github.io/datastructures/data/m03.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/final01/files/m3.txt', body);
  }
  else {console.error('problems!')}
});

request('http://visualizedata.github.io/datastructures/data/m04.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/final01/files/m4.txt', body);
  }
  else {console.error('problems!')}
});

request('http://visualizedata.github.io/datastructures/data/m05.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/final01/files/m5.txt', body);
  }
  else {console.error('problems!')}
});

request('http://visualizedata.github.io/datastructures/data/m06.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/final01/files/m6.txt', body);
  }
  else {console.error('problems!')}
});

request('http://visualizedata.github.io/datastructures/data/m07.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/final01/files/m7.txt', body);
  }
  else {console.error('problems!')}
});

request('http://visualizedata.github.io/datastructures/data/m08.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/final01/files/m8.txt', body);
  }
  else {console.error('problems!')}
});

request('http://visualizedata.github.io/datastructures/data/m09.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/final01/files/m9.txt', body);
  }
  else {console.error('problems!')}
});

request('http://visualizedata.github.io/datastructures/data/m10.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/final01/files/m10.txt', body);
  }
  else {console.error('problems!')}
});