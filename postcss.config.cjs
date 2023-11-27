const autoprefixer = require('autoprefixer');
const csso = require('postcss-csso');
const unocss=  require("@unocss/postcss");

const config = {
  plugins: [
    unocss(),
    autoprefixer(),
    csso(),
  ],
};

module.exports = config;
