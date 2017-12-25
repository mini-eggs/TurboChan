module.exports = {
  webpack: (config, options, webpack) => ({
    ...config,
    entry: {
      ...config.entry,
      main: "./server.js"
    }
  })
}