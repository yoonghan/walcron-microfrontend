const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'walcomponent',
        remotes: {
          walmonitor: `walmonitor@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './title': './src/components/ExposedTitle.tsx',
        },
        shared: {
          // whatever else
        },
      })
    );

    return config;
  },
};
