const path = require("path");
const dataApp = require("./data.json");
const seller = dataApp.seller;
const goods = dataApp.goods;
const staings = dataApp.staings;

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: ["./src/theme"]
      }
    }
  },
  pluginOptions: {
    "cube-ui": {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    before(app) {
      app.get("/api/seller", function(req, res) {
        res.json({
          errno: 0,
          data: seller
        });
      });
      app.get("/api/goods", function(req, res) {
        res.json({
          errno: 0,
          data: goods
        });
      });
      app.get("/api/staings", function(req, res) {
        res.json({
          errno: 0,
          data: staings
        });
      });
    }
  },
  chainWebpack(config) {
    config.resolve.alias
      .set("components", resolve("src/components"))
      .set("common", resolve("src/common"))
      .set("api", resolve("src/api"));
  }
};
