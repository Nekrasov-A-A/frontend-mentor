module.exports = {
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      sass: {
        additionalData: `
        @import "~@/styles/_variables.sass" 
        @import "~@/styles/main.sass"
        `,
      },
    },
  },
};
