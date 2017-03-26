/**
 * Main application logic.
 */
AFRAME.registerComponent('fg-app', {
  init: function() {
    if (!this.inAltspace()) {
      // Create a skybox.
      var sky = document.createElement('a-sky');

      this.el.appendChild(sky);

      // For some reason, attributes have to be set after the sky is appended.
      // Otherwise errors are thrown about components not existing.

      // Set color to a natural sky color.
      sky.setAttribute('material', 'color', '#0088ff');
      // Set radius to match Altspace's fullspace skybox.
      sky.setAttribute('geometry', 'radius', '4096');
    }
  },

  /**
   * Returns whether document is running in the AltspaceVR client.
   */
  inAltspace: function() {
    return (
      (typeof altspace !== 'undefined') &&
      (typeof altspace.inClient !== 'undefined') &&
      altspace.inClient
    );
  }
});
