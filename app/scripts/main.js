(function() {

  var onDeviceReady = function() {
    var $ul = $('<ul></ul>');
    [
      'Device Name    : ' + window.device.name,
      'Device Model   : ' + window.device.model,
      'Device Cordova : ' + window.device.cordova,
      'Device Platform: ' + window.device.platform,
      // 'Device UUID    : ' + window.device.uuid,
      'Device Version : ' + window.device.version,
    ].forEach(function(info) {
      var $li = $('<li>' + info + '</li>');
      $ul.append($li);
    });
    $('body').append($ul);
  };

  $(document).ready(function() {
    var isMobileDevice = (window.location.protocol !== 'http');
    if (isMobileDevice) {
      $(document).one('deviceready', onDeviceReady);
    } else {
      onDeviceReady();
    }
  });

})();
