var fs = require('fs');
var styleInjector = require('../index');

var htmlFile = fs.createReadStream('./index.html');

var cssFile = fs.readFileSync('./style.css', {encoding: 'utf8'});

htmlFile.pipe(styleInjector(cssFile)).pipe(process.stdout);



