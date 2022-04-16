const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  configureWebpack: {
    amd: {
      // Enable webpack-friendly use of require in Cesium
      // Tells Cesium that the version of AMD webpack uses to evaluate require statements is not compliant with the standard toUrl function
      toUrlUndefined: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: '@open-wc/webpack-import-meta-loader'
          }
          // include: path.resolve(__dirname, 'node_modules/cesium/Source')
        }
      ],
      unknownContextCritical: false
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: 'node_modules/cesium/Build/Cesium/Workers',
          to: 'cesium/Workers'
        }
      ]),
      new CopyWebpackPlugin([
        {
          from: 'node_modules/cesium/Build/Cesium/ThirdParty',
          to: 'cesium/ThirdParty'
        }
      ]),
      new CopyWebpackPlugin([
        { from: 'node_modules/cesium/Build/Cesium/Assets', to: 'cesium/Assets' }
      ]),
      new CopyWebpackPlugin([
        {
          from: 'node_modules/cesium/Build/Cesium/Widgets',
          to: 'cesium/Widgets'
        }
      ]),
      new webpack.DefinePlugin({
        // Define relative base path in cesium for loading assets
        CESIUM_BASE_URL: JSON.stringify('./cesium')
      })
    ]
  }
}
