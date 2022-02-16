const path = require('path')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const publicPath = '/ServiceStatus/'
const TerserPlugin = require('terser-webpack-plugin')

const prodConfig = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath,
    filename: '[name].[fullhash].js',
    assetModuleFilename: 'asset/[name].[contenthash:8].[ext]'
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      minSize: 0
    },
    minimizer: [
      new TerserPlugin({
        parallel: 4,
        terserOptions: {
          parse: {
            ecma: 8
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2
          },
          mangle: {
            safari10: true
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true
          }
        }
      })
    ]
  }
}

module.exports = webpackMerge.merge(baseConfig, prodConfig)
