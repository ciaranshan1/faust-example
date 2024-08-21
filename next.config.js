const { withFaust, getWpHostname } = require('@faustwp/core');
const { createSecureHeaders } = require('next-secure-headers');
const { withAtlasConfig } = require("@wpengine/atlas-next");

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = withFaust({
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['node_modules'],
  },
  images: {
    domains: [getWpHostname()],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  async headers() {
    return [{ source: '/:path*', headers: createSecureHeaders({
      xssProtection: false
    }) }];
  },
});

module.exports = withAtlasConfig(nextConfig);
