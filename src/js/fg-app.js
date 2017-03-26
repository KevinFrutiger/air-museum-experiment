/**
 * Main application logic.
 */
AFRAME.registerComponent('fg-app', {
  init: function() {
    if (!this.inAltspace()) {
      // Create a skybox.
      var sky = document.createElement('a-sky');
      sky.setAttribute('material', 'color', 'blue');
      sky.setAttribute('radius', '4096');

      this.el.appendChild(sky);
    }

    this.setupAnimation();
  },

  inAltspace: function() {
    return (
      (typeof altspace !== 'undefined') &&
      (typeof altspace.inClient !== 'undefined') &&
      altspace.inClient
    );
  },

  setupAnimation: function() {
    //
  }
});
