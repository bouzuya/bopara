module.exports = {
  androidVersionCode: {
    path: 'cordova/platforms/android/AndroidManifest.xml',
    pattern: 'android:versionCode="\\d+"',
    replacement: 'android:versionCode="3"'
  }
};
