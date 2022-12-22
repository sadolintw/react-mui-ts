/* config-overrides.js */
/* eslint-disable react-hooks/rules-of-hooks */

// import { createRequire } from 'module'
// const require = createRequire(import.meta.url);

const { useBabelRc, override } = require('customize-cra');

module.exports = override(useBabelRc());