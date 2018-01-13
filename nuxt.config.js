module.exports = {
  head: { title: "Turbo Chan" },
  loading: { color: "transparent" },
  // modules: ["@nuxtjs/workbox"] // seems to cause issues on update,
  build: {
    extend: config => ({
      ...config,
      module: {
        ...config.module,
        rules: [...config.module.rules, { test: /\.ts$/, loader: "ts-loader" }]
      }
    })
  }
};
