/* global App, Backbone */

App.Views = App.Views || {};

(function () {
  'use strict';

  App.Views.AboutPage = Backbone.View.extend({

    template: App.Templates['app/scripts/templates/about_page.ejs'],

    tagName: 'div',

    id: 'about-page',

    className: 'page',

    events: {},

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }

  });

})();
