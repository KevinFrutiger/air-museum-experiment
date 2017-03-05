// For use in Coherent UI Debugger/DevTools only.
// document.body.appendChild(document.createElement('script')).src = 'dev_utils.js';

function showColliders(str) {
  var colliderType = str || 'mesh';
  var colliders = document.querySelectorAll('[n-' + colliderType + '-collider]');

  if (colliders.length === 0) {
    console.warn('No colliders of that type');
    return;
  }

  for (var i = 0; i < colliders.length; i++) {
    colliders[i].setAttribute('material', 'shader: flat; color: red; opacity: 0.3');
  }
}