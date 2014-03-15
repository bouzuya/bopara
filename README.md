bopara
==============================================================================

The paradise of bouzuya.

Build
------------------------------------------------------------------------------

### prepare

    $ sudo apt-get install -y openjdk-7-jdk ant
    $ PATH=$PATH:/path/to/android/sdk/tools/
    $
    $ npm install
    $
    $ src='app'
    $ dist='dist'
    $ cordova_dir='cordova'
    $ app_id='net.bouzuya.bopara'
    $ app_name='bopara'
    $ platform='android'
    $ plugin='org.apache.cordova.device'

### clean:html5

    $ grunt clean:html5

### clean:native

    $ grunt clean:native

### compile:html5

    $ cp -r $src $dist

### compile:native

    $ cordova create $cordova_dir $app_id $app_name --link-to=$dist
    $ cd $cordova_dir 
    $ cordova platform add $platform
    $ cordova platform list
    $ cordova plugin add $plugin
    $ cordova plugin list
    $ cordova build $platform
    $ cd platforms/$platform

