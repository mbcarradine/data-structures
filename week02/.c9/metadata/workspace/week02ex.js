{"filter":false,"title":"week02ex.js","tooltip":"/week02ex.js","undoManager":{"mark":99,"position":99,"stack":[[{"start":{"row":0,"column":0},"end":{"row":20,"column":0},"action":"insert","lines":["// npm install cheerio","","var fs = require('fs');","var cheerio = require('cheerio');","","// load the thesis text file into a variable, `content`","var content = fs.readFileSync('data/thesis.txt');","","// load `content` into a cheerio object","var $ = cheerio.load(content);","","// print names of thesis students","$('h3').each(function(i, elem) {","    console.log($(elem).text());","});","","// print project titles","$('.project .title').each(function(i, elem) {","    console.log($(elem).text());","});",""],"id":1}],[{"start":{"row":8,"column":39},"end":{"row":8,"column":40},"action":"insert","lines":["."],"id":2}],[{"start":{"row":8,"column":40},"end":{"row":8,"column":41},"action":"insert","lines":[" "],"id":3}],[{"start":{"row":8,"column":41},"end":{"row":8,"column":42},"action":"insert","lines":["D"],"id":4}],[{"start":{"row":8,"column":42},"end":{"row":8,"column":43},"action":"insert","lines":["o"],"id":5}],[{"start":{"row":8,"column":43},"end":{"row":8,"column":44},"action":"insert","lines":["l"],"id":6}],[{"start":{"row":8,"column":44},"end":{"row":8,"column":45},"action":"insert","lines":["l"],"id":7}],[{"start":{"row":8,"column":45},"end":{"row":8,"column":46},"action":"insert","lines":["a"],"id":8}],[{"start":{"row":8,"column":46},"end":{"row":8,"column":47},"action":"insert","lines":["r"],"id":9}],[{"start":{"row":8,"column":47},"end":{"row":8,"column":48},"action":"insert","lines":[" "],"id":10}],[{"start":{"row":8,"column":48},"end":{"row":8,"column":49},"action":"insert","lines":["s"],"id":11}],[{"start":{"row":8,"column":49},"end":{"row":8,"column":50},"action":"insert","lines":["i"],"id":12}],[{"start":{"row":8,"column":50},"end":{"row":8,"column":51},"action":"insert","lines":["g"],"id":13}],[{"start":{"row":8,"column":51},"end":{"row":8,"column":52},"action":"insert","lines":["n"],"id":14}],[{"start":{"row":8,"column":52},"end":{"row":8,"column":53},"action":"insert","lines":[" "],"id":15}],[{"start":{"row":8,"column":53},"end":{"row":8,"column":54},"action":"insert","lines":["i"],"id":16}],[{"start":{"row":8,"column":54},"end":{"row":8,"column":55},"action":"insert","lines":["s"],"id":17}],[{"start":{"row":8,"column":55},"end":{"row":8,"column":56},"action":"insert","lines":[" "],"id":18}],[{"start":{"row":8,"column":56},"end":{"row":8,"column":57},"action":"insert","lines":["a"],"id":19}],[{"start":{"row":8,"column":57},"end":{"row":8,"column":58},"action":"insert","lines":[" "],"id":20}],[{"start":{"row":8,"column":58},"end":{"row":8,"column":59},"action":"insert","lines":["s"],"id":21}],[{"start":{"row":8,"column":59},"end":{"row":8,"column":60},"action":"insert","lines":["e"],"id":22}],[{"start":{"row":8,"column":60},"end":{"row":8,"column":61},"action":"insert","lines":["l"],"id":23}],[{"start":{"row":8,"column":61},"end":{"row":8,"column":62},"action":"insert","lines":["e"],"id":24}],[{"start":{"row":8,"column":62},"end":{"row":8,"column":63},"action":"insert","lines":["c"],"id":25}],[{"start":{"row":8,"column":63},"end":{"row":8,"column":64},"action":"insert","lines":["t"],"id":26}],[{"start":{"row":8,"column":64},"end":{"row":8,"column":65},"action":"insert","lines":["o"],"id":27}],[{"start":{"row":8,"column":65},"end":{"row":8,"column":66},"action":"insert","lines":["r"],"id":28}],[{"start":{"row":8,"column":66},"end":{"row":8,"column":67},"action":"insert","lines":["."],"id":29}],[{"start":{"row":16,"column":23},"end":{"row":16,"column":24},"action":"insert","lines":["."],"id":30}],[{"start":{"row":16,"column":24},"end":{"row":16,"column":25},"action":"insert","lines":[" "],"id":31}],[{"start":{"row":16,"column":25},"end":{"row":16,"column":26},"action":"insert","lines":["h"],"id":32}],[{"start":{"row":16,"column":26},"end":{"row":16,"column":27},"action":"insert","lines":["e"],"id":33}],[{"start":{"row":16,"column":27},"end":{"row":16,"column":28},"action":"insert","lines":["'"],"id":34}],[{"start":{"row":16,"column":28},"end":{"row":16,"column":29},"action":"insert","lines":["s"],"id":35}],[{"start":{"row":16,"column":29},"end":{"row":16,"column":30},"action":"insert","lines":[" "],"id":36}],[{"start":{"row":16,"column":30},"end":{"row":16,"column":31},"action":"insert","lines":["u"],"id":37}],[{"start":{"row":16,"column":31},"end":{"row":16,"column":32},"action":"insert","lines":["s"],"id":38}],[{"start":{"row":16,"column":32},"end":{"row":16,"column":33},"action":"insert","lines":["i"],"id":39}],[{"start":{"row":16,"column":33},"end":{"row":16,"column":34},"action":"insert","lines":["n"],"id":40}],[{"start":{"row":16,"column":34},"end":{"row":16,"column":35},"action":"insert","lines":["g"],"id":41}],[{"start":{"row":16,"column":35},"end":{"row":16,"column":36},"action":"insert","lines":[" "],"id":42}],[{"start":{"row":16,"column":36},"end":{"row":16,"column":37},"action":"insert","lines":["a"],"id":43}],[{"start":{"row":16,"column":37},"end":{"row":16,"column":38},"action":"insert","lines":[" "],"id":44}],[{"start":{"row":16,"column":38},"end":{"row":16,"column":39},"action":"insert","lines":["h"],"id":45}],[{"start":{"row":16,"column":39},"end":{"row":16,"column":40},"action":"insert","lines":["i"],"id":46}],[{"start":{"row":16,"column":40},"end":{"row":16,"column":41},"action":"insert","lines":["e"],"id":47}],[{"start":{"row":16,"column":41},"end":{"row":16,"column":42},"action":"insert","lines":["r"],"id":48}],[{"start":{"row":16,"column":42},"end":{"row":16,"column":43},"action":"insert","lines":["a"],"id":49}],[{"start":{"row":16,"column":43},"end":{"row":16,"column":44},"action":"insert","lines":["r"],"id":50}],[{"start":{"row":16,"column":44},"end":{"row":16,"column":45},"action":"insert","lines":["c"],"id":51}],[{"start":{"row":16,"column":45},"end":{"row":16,"column":46},"action":"insert","lines":["h"],"id":52}],[{"start":{"row":16,"column":46},"end":{"row":16,"column":47},"action":"insert","lines":["y"],"id":53}],[{"start":{"row":16,"column":47},"end":{"row":16,"column":48},"action":"insert","lines":[" "],"id":54}],[{"start":{"row":16,"column":47},"end":{"row":16,"column":48},"action":"remove","lines":[" "],"id":55}],[{"start":{"row":16,"column":47},"end":{"row":16,"column":48},"action":"insert","lines":[","],"id":56}],[{"start":{"row":16,"column":48},"end":{"row":16,"column":49},"action":"insert","lines":[" "],"id":57}],[{"start":{"row":16,"column":49},"end":{"row":16,"column":50},"action":"insert","lines":["l"],"id":58}],[{"start":{"row":16,"column":50},"end":{"row":16,"column":51},"action":"insert","lines":["o"],"id":59}],[{"start":{"row":16,"column":51},"end":{"row":16,"column":52},"action":"insert","lines":["o"],"id":60}],[{"start":{"row":16,"column":52},"end":{"row":16,"column":53},"action":"insert","lines":["k"],"id":61}],[{"start":{"row":16,"column":53},"end":{"row":16,"column":54},"action":"insert","lines":["i"],"id":62}],[{"start":{"row":16,"column":54},"end":{"row":16,"column":55},"action":"insert","lines":["n"],"id":63}],[{"start":{"row":16,"column":55},"end":{"row":16,"column":56},"action":"insert","lines":["g"],"id":64}],[{"start":{"row":16,"column":56},"end":{"row":16,"column":57},"action":"insert","lines":[" "],"id":65}],[{"start":{"row":16,"column":57},"end":{"row":16,"column":58},"action":"insert","lines":["f"],"id":66}],[{"start":{"row":16,"column":58},"end":{"row":16,"column":59},"action":"insert","lines":["o"],"id":67}],[{"start":{"row":16,"column":59},"end":{"row":16,"column":60},"action":"insert","lines":["r"],"id":68}],[{"start":{"row":16,"column":60},"end":{"row":16,"column":61},"action":"insert","lines":[" "],"id":69}],[{"start":{"row":16,"column":61},"end":{"row":16,"column":62},"action":"insert","lines":["s"],"id":70}],[{"start":{"row":16,"column":62},"end":{"row":16,"column":63},"action":"insert","lines":["t"],"id":71}],[{"start":{"row":16,"column":63},"end":{"row":16,"column":64},"action":"insert","lines":["u"],"id":72}],[{"start":{"row":16,"column":64},"end":{"row":16,"column":65},"action":"insert","lines":["f"],"id":73}],[{"start":{"row":16,"column":65},"end":{"row":16,"column":66},"action":"insert","lines":["f"],"id":74}],[{"start":{"row":16,"column":66},"end":{"row":16,"column":67},"action":"insert","lines":[" "],"id":75}],[{"start":{"row":16,"column":67},"end":{"row":16,"column":68},"action":"insert","lines":["i"],"id":76}],[{"start":{"row":16,"column":68},"end":{"row":16,"column":69},"action":"insert","lines":["n"],"id":77}],[{"start":{"row":16,"column":69},"end":{"row":16,"column":70},"action":"insert","lines":[" "],"id":78}],[{"start":{"row":16,"column":70},"end":{"row":16,"column":71},"action":"insert","lines":["p"],"id":79}],[{"start":{"row":16,"column":71},"end":{"row":16,"column":72},"action":"insert","lines":["r"],"id":80}],[{"start":{"row":16,"column":72},"end":{"row":16,"column":73},"action":"insert","lines":["o"],"id":81}],[{"start":{"row":16,"column":73},"end":{"row":16,"column":74},"action":"insert","lines":["j"],"id":82}],[{"start":{"row":16,"column":74},"end":{"row":16,"column":75},"action":"insert","lines":["e"],"id":83}],[{"start":{"row":16,"column":75},"end":{"row":16,"column":76},"action":"insert","lines":["c"],"id":84}],[{"start":{"row":16,"column":76},"end":{"row":16,"column":77},"action":"insert","lines":["t"],"id":85}],[{"start":{"row":16,"column":77},"end":{"row":16,"column":78},"action":"insert","lines":[","],"id":86}],[{"start":{"row":16,"column":78},"end":{"row":16,"column":79},"action":"insert","lines":[" "],"id":87}],[{"start":{"row":16,"column":79},"end":{"row":16,"column":80},"action":"insert","lines":["t"],"id":88}],[{"start":{"row":16,"column":80},"end":{"row":16,"column":81},"action":"insert","lines":["h"],"id":89}],[{"start":{"row":16,"column":81},"end":{"row":16,"column":82},"action":"insert","lines":["e"],"id":90}],[{"start":{"row":16,"column":82},"end":{"row":16,"column":83},"action":"insert","lines":["n"],"id":91}],[{"start":{"row":16,"column":83},"end":{"row":16,"column":84},"action":"insert","lines":[" "],"id":92}],[{"start":{"row":16,"column":84},"end":{"row":16,"column":85},"action":"insert","lines":["i"],"id":93}],[{"start":{"row":16,"column":85},"end":{"row":16,"column":86},"action":"insert","lines":["n"],"id":94}],[{"start":{"row":16,"column":86},"end":{"row":16,"column":87},"action":"insert","lines":[" "],"id":95}],[{"start":{"row":16,"column":87},"end":{"row":16,"column":88},"action":"insert","lines":["t"],"id":96}],[{"start":{"row":16,"column":88},"end":{"row":16,"column":89},"action":"insert","lines":["i"],"id":97}],[{"start":{"row":16,"column":89},"end":{"row":16,"column":90},"action":"insert","lines":["t"],"id":98}],[{"start":{"row":16,"column":90},"end":{"row":16,"column":91},"action":"insert","lines":["l"],"id":99}],[{"start":{"row":16,"column":91},"end":{"row":16,"column":92},"action":"insert","lines":["e"],"id":100}]]},"ace":{"folds":[],"scrolltop":55,"scrollleft":0,"selection":{"start":{"row":18,"column":3},"end":{"row":18,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":2,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1504659940385,"hash":"9e6c38a17af2db5cab1400e2a3a6db9b56910e58"}