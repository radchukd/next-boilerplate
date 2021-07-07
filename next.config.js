/* eslint-disable @typescript-eslint/no-var-requires */
const { i18n } = require("./next-i18next.config.js");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const isProd = process.env.NODE_ENV === "production";

module.exports = withPWA({
  i18n,
  pwa: {
    disable: isProd ? false : true,
    dest: "public",
    runtimeCaching,
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          fs: false,
        },
      };
    }

    return config;
  },
});
