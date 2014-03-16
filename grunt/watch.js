module.exports = {
  develop: {
    files: [
      'app/*',
      'app/**'
    ],
    tasks: ['compile:native_www'],
    options: {
      spawn: true,
      interrupt: false,
      debounceDelay: 500,
      interval: 100,
      event: 'all',
      reload: true,
      forever: true,
      // dateFormat: 
      atBegin: false,
      livereload: 35729,
      cwd: process.cwd(),
      livereloadOnError: true
    }

  }
};
