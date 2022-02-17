const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const formatTS = require('@formatjs/ts-transformer')

module.exports = {
  entry: {
    app: './src/index.tsx'
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[fullhash].js'
  },
  resolve: {
    alias: {
      '@assets': path.resolve('src/assets'),
      '@': path.resolve('src')
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.d.ts']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ESLintPlugin({
      context: './src', // 检查目录
      extensions: ['js', 'jsx', 'ts', 'tsx'] // 文件扩展
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[fullhash].css'
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn|en/)
  ],
  module: {
    rules: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              getCustomTransformers() {
                return {
                  before: [
                    formatTS.transform({
                      overrideIdFn: '[sha512:contenthash:base64:6]'
                    })
                  ]
                }
              }
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.module.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '_[local]_[hash:base64:6]'
              },
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                importLoaders: 2,
                javascriptEnabled: true
              }
            }
          }
        ]
      },
      {
        test: /\.less$/,
        exclude: /\.module.less|node_modules/,
        use: [
          'style-loader',
          'css-loader',
          // 'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf|otf|ico)$/i,
        type: 'asset/resource',
        exclude: /node_modules/
      }
    ]
  },
  cache: {
    type: 'filesystem',
    // 可选配置
    buildDependencies: {
      config: [__filename]
    },
    name: 'development-cache'
  }
}
