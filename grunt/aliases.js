module.exports = {
  default: [
    'clean',
    'validate',
    'compile',
    'test',
    'package'
  ],
  validate: [
    'jshint'
  ],
  compile: [
    'compile:html5',
    'compile:native',
  ],
  test: [],
  package: [],
  'compile:html5': [
    'jst',
    'useminPrepare',
    'concat',
    'uglify',
    'cssmin',
    'copy:html5',
    'usemin',
  ],
  'compile:native': [
    'cordovacli:create',
    'cordovacli:add_platforms',
    'cordovacli:add_plugins',
    'cordovacli:prepare_android',
    'copy:android_icons',
    'sed:androidVersionCode',
    'cordovacli:compile_android',
  ],
  develop: [
    'connect:develop',
    'watch:develop'
  ],
  develop_native: [
    'connect:develop_native',
    'watch:develop'
  ]

};
