AFRAME.registerComponent('fg-fly-pattern', {
  schema: {
    animations: { type: 'string' }
  },

  update: function() {
    //var el = this.el;
    //console.log(this.data)
    //var boeing747 = document.querySelector('#boeing-747-100-flying');
    // var upwind = el.querySelector('#' + this.data.animation_ids[0]);
    // var downwind = el.querySelector('#' + this.data.animation_ids[1]);

    // el.addEventListener('stateadded', function(event) {
    //   if (event.detail.state === 'fly') {
    //     el.emit('flyupwind');
    //   }
    // });

    // upwind.addEventListener('animationend', function() {
    //   el.emit('flydownwind');
    // });

    // downwind.addEventListener('animationend', function() {
    //   el.emit('flyupwind');
    // });

    // el.addEventListener('model-loaded', function() {
    //   el.addState('fly');
    // });
  }

});