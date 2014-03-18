/* global $, document */
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

    var homePage = new App.Models.HomePage();
    var homePageView = new App.Views.HomePage({ model: homePage });
    homePageView.render().$el.appendTo($('body'));

    $('#home-page').css('z-index', 0);

    var viewStack = [];

    var pushView = function(id) {
      viewStack.push(id);
      var $view = $(id);
      $view.one('webkitAnimationEnd animationend', function() {
        $view.removeClass('righttocenter');
      });
      $view.addClass('righttocenter');
      $view.css({ 'z-index': viewStack.length });
    };

    var popView = function() {
      var id = viewStack.shift();
      var $view = $(id);
      $view.one('webkitAnimationEnd animationend', function() {
        $view.removeClass('centertoright');
        $view.css({ 'z-index': -10 });
      });
      $view.addClass('centertoright');
    };

    $(document).on('click', '.about-button', function() {
      pushView('#about');
    });

    $(document).on('click', '.back-button', function() {
      popView();
    });
  };

  $(document).ready(function() {
    var isMobileDevice = !/^http:/.test(window.location.href);
    if (isMobileDevice) {
      $(document).one('deviceready', onDeviceReady);
    } else {
      onDeviceReady();
    }
  });

})();
