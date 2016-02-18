var dest = 'public';

var config = {
  env: {},
  inject: {
    ignorePath: dest,
    addRootSlash: false
  },
  bowerFiles: {
    paths: {
      bowerDirectory: "node_modules",
      bowerJson: "package.json"
    }
  },
  paths: {
    js: 'lib/http_client.js',
    watchApp: 'lib/**/*.js',
    index: 'development/index.html',
    dest: dest,
  },
};

module.exports = config;
