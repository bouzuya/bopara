
module.exports = function(grunt) {
  require('load-grunt-config')(grunt, {
    config: {
      deploygate: {
        options: {
          ownerName: process.env.DEPLOYGATE_OWNER_NAME
        },
        android: {
          token: process.env.DEPLOYGATE_TOKEN,
          file: 'cordova/platforms/android/bin/bopara-debug.apk'
        }
      }
    }
  });

  grunt.registerMultiTask('deploygate', function() {
    var path = require('path');
    var util = require('util');
    var request = require('superagent');

    var options = this.options({});
    var data = this.data;
    var done = this.async();

    var url = util.format('https://deploygate.com/api/users/%s/apps', options.ownerName);
    request
    .post(url)
    .field('token', data.token)
    .attach('file', path.join(__dirname, data.file))
    .end(function(err, res) {
      if (err) {
        grunt.warn(util.inspect(err));
      }
      done();
    });
  });
};
