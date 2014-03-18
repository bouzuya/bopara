module.exports = {
  options: {
    unused: true,
    undef: true,
    node: true,
    indent: 2,
    force: true,
    reporter: require('jshint-default')
  },
  gruntfile: ['Gruntfile.js', 'grunt/*.js'],
  app: {
    options: {
      globals: {
        'window': false
      }
    },
    files: {
      src: ['app/script/**.js', '!app/script/vendor/**.js'],
    }
  },
  test: {
    options: {
      expr: true,
      globals: {
        it: false,
        describe: false,
        before: false,
        beforeEach: false,
        after: false,
        afterEach: false
      }
    },
    files: {
      src: ['test/*.js', 'test/**/*.js']
    }
  }
};

