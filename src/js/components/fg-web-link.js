/**
 *  Adds handlers to open a web page.
 *
 *  Note that Altspace web viewe does not navigate to anchors.
 */
AFRAME.registerComponent('fg-web-link', {
  schema: {
    url: {type: 'string'}
  },

  init: function() {
    var data = this.data;
    var el = this.el;

    this.clickHandler = function(event) {
      app.open(data.url);
    };

    this.mouseenterHandler = function(event) {
      event.target.setAttribute('color', '#ffd200');
    };

    this.mouseleave = function(event) {
      event.target.setAttribute('color', '#fff');
    };

    el.addEventListener('click', this.clickHandler);
    el.addEventListener('mouseenter', this.mouseenterHandler, true);
    // Doesn't work in browser A-Frame 0.3.0
    el.addEventListener('mouseleave', this.mouseleave);

  },

  update: function(oldData) {
    // Nothing.
  },

  remove: function() {
    el.removeEventListener('click', this.clickHandler);
    el.removeEventListener('mouseenter', this.mouseenterHandler, true);
    el.removeEventListener('mouseleave', this.mouseleave);
  }
});