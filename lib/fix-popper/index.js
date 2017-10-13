/* eslint-env node */
'use strict';
const StringReplace = require('broccoli-string-replace');

module.exports = {
  name: 'fix-popper',

  postprocessTree(type, tree) {
    if (type !== 'all') {
      return tree;
    }
    return StringReplace('app', {
      files: ['popper.js'],
      pattern: {
        match: /\/\/# sourceMappingURL=popper.js.map/g,
        replacement: ''
      }
    });
  }
};
