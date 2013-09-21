var trumpet = require('trumpet')
  , through = require('through');

function styleInjector (css, options) {
  var tr, header;

  css = css || '';
  css = '<style type="text/css">\n' + css + '\n</style>\n';

  tr = trumpet();
  header = tr.createStream('head');

  header
    .pipe(through(
      null,
      function () {
        this.queue(css);
        this.queue(null);
      }))
    .pipe(header);

    return tr;
}

module.exports = styleInjector;