var app;

(function() {
  'use strict';

  app =  {
    init: function() {
      if (!app.inAltspace()) {
        // Create a skybox.
        var el = document.createElement('a-sky');
        el.setAttribute('material', 'color', 'blue');
        el.setAttribute('radius', '4096');

        var sceneEl = document.querySelector('a-scene');
        sceneEl.appendChild(el);
      }

      app.setupAnimation();
    },

    setupAnimation: function() {
      var boeing747 = document.querySelector('#boeing-747-100-flying');
      var upwind = document.querySelector('#boeing-747-100-upwind');
      var downwind = document.querySelector('#boeing-747-100-downwind');

      upwind.addEventListener('animationend', function() {
        boeing747.emit('flydownwind');
      });

      downwind.addEventListener('animationend', function() {
        boeing747.emit('flyupwind');
      });

      boeing747.addEventListener('stateadded', function(event) {
        if (event.detail.state === 'fly') {
          boeing747.emit('flyupwind');
        }
      });

      boeing747.addEventListener('model-loaded', function() {
        boeing747.addState('fly');
      });
    }
  };
})();

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('a-scene').addEventListener('loaded', app.init);
});
