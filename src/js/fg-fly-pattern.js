/**
 * Manages the animation chain for flying around.
 *
 *  Expects at least two <a-animation> IDs. The first one (the upwind leg)
 *  will emit 'flydownwind' on animationend and the second (the downind leg)
 *  will emit 'flyupwind' on animationend (both on the main element).
 *
 *  The animation starts as soon as 'model-loaded' event fires on the element.
 */
AFRAME.registerComponent('fg-fly-pattern', {
  schema: { // Array of <a-animation> ids
    type: 'array'
  },

  update: function() {
    var el = this.el;

    // Get references for our two required <a-animation> objects
    var upwind = el.querySelector('#' + this.data[0]);
    var downwind = el.querySelector('#' + this.data[1]);

    // Listen for a 'fly' event then start the animation.
    el.addEventListener('stateadded', function(event) {
      if (event.detail.state === 'fly') {
        el.emit('flyupwind');
      }
    });

    // Listen for animation to end to start the other leg
    upwind.addEventListener('animationend', function() {
      el.emit('flydownwind');
    });

    downwind.addEventListener('animationend', function() {
      el.emit('flyupwind');
    });

    // Listen for the model to load then notify the main element to start.
    el.addEventListener('model-loaded', function() {
      el.addState('fly');
    });
  }

});