var fs = require('fs');
fs.rename('webpack.extra.js', 'webpack.extra_.js', function (err) {
  if (err) console.log('ERROR: ' + err);

  fs.rename('webpack.test.js', 'webpack.extra.js', function (err) {
    if (err) console.log('ERROR: ' + err);
  });
});
