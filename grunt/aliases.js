module.exports = {
  default: [
    'clean',
    'validate',
    'compile',
    'test',
    'package'
  ],
  validate: [],
  compile: [
    'compile:html5',
    'compile:native',
  ],
  test: [],
  package: [],
  'compile:html5': 'copy:html5',
  'compile:native': [
    'cordovacli:create',
    'cordovacli:add_platforms',
    'cordovacli:add_plugins',
    'cordovacli:build_android',
  ]
};
