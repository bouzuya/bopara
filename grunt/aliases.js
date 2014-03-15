module.exports = {
  default: [
    'clean',
    'validate',
    'compile',
    'test',
    'package'
  ],
  validate: [],
  compile: 'compile:html5',
  test: [],
  package: [],
  'compile:html5': 'copy:html5',
};
