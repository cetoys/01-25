const path = require('path');

module.exports = {
  eslint: path.join(__dirname, 'eslint.base.cjs'),
  prettier: path.join(__dirname, 'prettier.config.cjs'),
  tsconfig: path.join(__dirname, 'tsconfig.base.json'),
};
