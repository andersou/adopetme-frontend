const path = require("path");
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "~bulma/sass/utilities/mixins";
          @import "~bulma/sass/utilities/initial-variables";
         @import "src/styles/_variables.scss";
        `,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        assets: path.resolve(__dirname, "src", "assets"),
      },
    },
  },
};
