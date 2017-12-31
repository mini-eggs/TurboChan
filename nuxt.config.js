module.exports = {
  head: { title: "Turbo Chan" },
  loading: { color: "transparent" },
};

// const webpack = require("webpack");

// if (process.env.STANDALONE) {
//   /* Use has router for Corodova */
//   module.exports.router = { mode: "hash" };
// }

// disable code splitting.
// build: {
//   extend(config) {
//     /* disable code splitting */
//     config.plugins = config.plugins.concat([
//       new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })
//     ]);
//     return config;
//   }
// }