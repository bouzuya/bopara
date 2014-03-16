module.exports = {
  develop: {
    options: {
      port: 9000,
      protocol: 'http',
      hostname: '0.0.0.0',
      base: 'app', // ['.tmp', 'app'] ?
      keepalive: true,
      debug: false,
      livereload: true,
      open: true,
      useAvailablePort: false,
      // middleware: []
    }
  }
};
