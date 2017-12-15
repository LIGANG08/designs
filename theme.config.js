const fs = require('fs');
const path = require('path');
const lessToJs = require('less-vars-to-js');

module.exports = () => {
  const themePath = path.join(__dirname, './src/theme.less');
  return lessToJs(fs.readdirSync(themePath, 'utf8'));
};
