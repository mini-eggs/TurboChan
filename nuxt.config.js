const webpack = require("webpack");

module.exports = {
  head: { title: "Turbo Chan" },
  loading: { color: "transparent" },
  build: {
    extend(config) {
      /* disable code splitting */
      config.plugins = config.plugins.concat([
        new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 0 })
      ]);
      return config;
    }
  }
};

if (process.env.STANDALONE) {
  /* Use has router for Corodova */
  module.exports.router = { mode: "hash" };
}
