const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: "[local]"
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.js$/,
      use: ["astroturf/loader"]
    });

    return config;
  }
});
