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

  var GA = function(options) {
    if (!window.plugins || !window.plugins.gaPlugin) {
      return;
    }

    var plugin = window.plugins.gaPlugin;
    plugin.init(
      function() { this.plugin = plugin; }.bind(this),
      function() {},
      options.id,
      options.period
    );
  };

  GA.prototype.track = function(url) {
    if (!this.plugin) {
      return;
    }

    this.plugin.trackPage(
      function() {},
      function() {},
      url
    );
  };

  var onDeviceReady = function() {

    var ga = new GA({ id: 'UA-49100579-1', period: 10 });

    showDeviceInfo();

    var homePage = new App.Models.HomePage();
    var homePageView = new App.Views.HomePage({ model: homePage });
    homePageView.render().$el.appendTo($('body'));

    var aboutPage = new App.Models.AboutPage();
    var aboutPageView = new App.Views.AboutPage({ model: aboutPage });
    aboutPageView.render().$el.appendTo($('body'));

    var pageStack = [];
    var pageTransition = false;

    var showPage = function($page) {
      var css = { 'z-index': pageStack.length, visibility: 'visible' };
      $page.css(css);
    };

    var hidePage = function($page) {
      var css = { 'z-index': -10 };
      if (window.device && window.device.platform === 'iOS') {
        css.visibility = 'hidden';
      }
      $page.css(css);
    };

    var pushPage = function(id) {
      if (pageTransition) {
        return;
      }
      pageTransition = true;

      ga.track(id);

      var prevId = pageStack[pageStack.length - 1];
      pageStack.push(id);
      var $page = $(id);
      $page.one('webkitAnimationEnd animationend', function() {
        $page.removeClass('righttocenter');
        if (prevId) {
          hidePage($(prevId));
        }
        pageTransition = false;
      });
      $page.addClass('righttocenter');
      showPage($page);
    };

    var popPage = function() {
      if (pageTransition) {
        return;
      }
      pageTransition = true;

      var id = pageStack.pop();
      var prevId = pageStack[pageStack.length - 1];
      var $page = $(id);
      $page.one('webkitAnimationEnd animationend', function() {
        $page.removeClass('centertoright');
        hidePage($page);
        pageTransition = false;
      });
      if (prevId) {
        showPage($(prevId));
      }
      $page.addClass('centertoright');
    };

    $(document).on('click', '.about-button', function() {
      pushPage('#about-page');
    });

    $(document).on('click', '.back-button', function() {
      popPage();
    });

    pushPage('#home-page');

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
