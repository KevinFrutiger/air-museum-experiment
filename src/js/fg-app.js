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
    var boeing747 = document.querySelector('#boeing-747-100-flying');
    var upwind = document.querySelector('#boeing-747-100-upwind');
    var downwind = document.querySelector('#boeing-747-100-downwind');

    boeing747.addEventListener('stateadded', function(event) {
      if (event.detail.state === 'fly') {
        boeing747.emit('flyupwind');
      }
    });

    upwind.addEventListener('animationend', function() {
      boeing747.emit('flydownwind');
    });

    downwind.addEventListener('animationend', function() {
      boeing747.emit('flyupwind');
    });

    boeing747.addEventListener('model-loaded', function() {
      boeing747.addState('fly');
    });
  }
});
