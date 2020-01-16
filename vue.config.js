const path = require("path");
process.env.VUE_APP_VERSION = require("./package.json").version;

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/graphene/" : "/",
  configureWebpack: {
    resolve: {
      alias: {
        "@gn-styles": path.resolve(__dirname, "packages/styles"),
        "@gn-components": path.resolve(__dirname, "packages/components"),
        "@gn-icons": path.resolve(__dirname, "packages/icons"),
        "@components": path.resolve(__dirname, "src/components"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@scss": path.resolve(__dirname, "src/scss"),
        "@js": path.resolve(__dirname, "src/js"),
        "@router": path.resolve(__dirname, "src/router"),
        "@store": path.resolve(__dirname, "src/store"),
        "@views": path.resolve(__dirname, "src/views")
      }
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },
  lintOnSave: true
};
