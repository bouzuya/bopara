module.exports = {
  options: {
    path: 'cordova',
    id: 'net.bouzuya.bopara',
    name: 'bopara',
    platforms: ['android'],
    plugins: ['org.apache.cordova.device']
  },
  create: {
    options: {
      command: 'create',
      args: ['--link-to=dist']
    }
  },
  add_platforms: {
    options: {
      command: 'platform',
      action: 'add'
    }
  },
  add_plugins: {
    options: {
      command: 'plugin',
      action: 'add'
    }
  },
  prepare_android: {
    options: {
      command: 'prepare',
      platforms: ['android']
    }
  },
  compile_android: {
    options: {
      command: 'compile',
      platforms: ['android']
    }
  }
};
