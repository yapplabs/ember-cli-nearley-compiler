'use strict';

const Nearly = require('broccoli-nearley');

module.exports = {
  name: '@peeriq/ember-cli-pegjs',

  included: function(app) {
    this._super.included.apply(this, arguments);
    this.setupPreprocessorRegistry('parent', app.registry);
  },

  setupPreprocessorRegistry: function(_type, registry) {
    registry.add('js', {
      name: 'ember-cli-nearley-compiler',
      ext: 'ne',
      toTree: tree => {
        return new Nearly(tree);
      }
    });
  }
};
