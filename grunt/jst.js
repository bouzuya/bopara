module.exports = {
  compile: {
    files: {
      'app/scripts/templates.js': ['app/scripts/templates/*.ejs'],
    },
    options: {
      namespace: 'App.Templates'
    }
  }
};
