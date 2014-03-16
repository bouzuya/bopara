(function() {

  var showDeviceInfo = function() {
    if (!window.device) {
      return;
    }
    console.log(window.device.name);
    console.log(window.device.model);
    console.log(window.device.cordova);
    console.log(window.device.platform);
    console.log(window.device.uuid);
    console.log(window.device.version);
  };

  var onDeviceReady = function() {

    showDeviceInfo();

    $('#home').addClass('center');

    var viewStack = [];

    var pushView = function(id) {
      viewStack.push(id);
      $view = $(id);
      $view.css('z-index', viewStack.length).addClass('center');
    };

    var popView = function() {
      var id = viewStack.shift();
      $(id).removeClass('center');
    };

    $(document).on('click', '.about-button', function() {
      pushView('#about');
    });

    $(document).on('click', '.back-button', function() {
      popView();
    });
  };

  $(document).ready(function() {
    var isMobileDevice = (window.location.protocol !== 'http:');
    if (isMobileDevice) {
      $(document).one('deviceready', onDeviceReady);
    } else {
      onDeviceReady();
    }
  });

})();
