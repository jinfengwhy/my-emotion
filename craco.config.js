const CracoLessPlugin = require('craco-less');

const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@/components': path.resolve(__dirname, 'src/components/'),
      '@/utils': path.resolve(__dirname, 'src/utils/'),
      '@/common': path.resolve(__dirname, 'src/common/'),
      '@/service': path.resolve(__dirname, 'src/service/'),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
