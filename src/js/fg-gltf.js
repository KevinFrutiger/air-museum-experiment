/**
 * Loads glTF model files.
 * Copied from gltf-model from 0.5.0 since it doesn't exist in 0.3.0.
 * Changed to use glTFLoader, since we're using three r74 instead of r84.
 */
AFRAME.registerComponent('gltf-model', {
  schema: {type: 'src'},

  init: function () {
    this.model = null;
    this.loader = new THREE.glTFLoader();
  },

  update: function () {
    var self = this;
    var el = this.el;
    var src = this.data;

    if (!src) { return; }

    this.remove();

    this.loader.load(src, function gltfLoaded (gltfModel) {
      self.model = gltfModel.scene;
      //self.system.registerModel(self.model);
      el.setObject3D('mesh', self.model);
      el.emit('model-loaded', {format: 'gltf', model: self.model});
    });
  },

  remove: function () {
    if (!this.model) { return; }
    this.el.removeObject3D('mesh');
    //this.system.unregisterModel(this.model);
  }
});