const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const resolve = dir => {
  return path.join(__dirname, dir);
};

const BASE_URL = process.env.NODE_ENV === "production" ? "./" : "/";

module.exports = {
  publicPath: BASE_URL,
  lintOnSave: false,
  assetsDir: "static",
  transpileDependencies: ["element-ui"], // 需要编译的依赖包名
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("_c", resolve("src/components"));
    // const types = ["vue-modules", "vue", "normal-modules", "normal"];
    // types.forEach(type =>
    //   addStyleResource(config.module.rule("scss").oneOf(type))
    // );

    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        return options;
      });
  },
  productionSourceMap: process.env.NODE_ENV === "production" ? false : true,
  configureWebpack:
    process.env.NODE_ENV === "production"
      ? {
          optimization: {
            minimizer: [
              new TerserPlugin({
                cache: true,
                parallel: true,
                terserOptions: {
                  compress: {
                    drop_console: true,
                    drop_debugger: true
                  }
                }
              })
            ]
          }
        }
      : {},
  devServer: {
    proxy: {
      "/server": {
        target: "https://d.app12.com",
        changeOrigin: true,
        pathRewrite: {
          "/server": "/"
        }
      }
    }
  }
};

// function addStyleResource(rule) {
//   rule
//     .use("style-resource")
//     .loader("style-resources-loader")
//     .options({});
// }
