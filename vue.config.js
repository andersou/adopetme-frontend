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
};
