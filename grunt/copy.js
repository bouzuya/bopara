module.exports = {
  html5: {
    expand: true,
    cwd: 'app/',
    src: '**',
    dest: 'dist/'
  },
  android_icons: {
    files: [
      { src: 'cordova/www/res/icons/android/icon-36-ldpi.png',  dest: 'cordova/platforms/android/res/drawable-ldpi/icon.png' },
      { src: 'cordova/www/res/icons/android/icon-48-mdpi.png',  dest: 'cordova/platforms/android/res/drawable-mdpi/icon.png' },
      { src: 'cordova/www/res/icons/android/icon-72-hdpi.png',  dest: 'cordova/platforms/android/res/drawable-hdpi/icon.png' },
      { src: 'cordova/www/res/icons/android/icon-96-xhdpi.png', dest: 'cordova/platforms/android/res/drawable-xhdpi/icon.png' },
    ]
  }
};
