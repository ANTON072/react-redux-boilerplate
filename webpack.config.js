const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const { GenerateSW } = require('workbox-webpack-plugin')

const ENV = process.env.NODE_ENV || 'development'
const isProd = ENV === 'production' || ENV === 'staging'
const output = isProd ? 'build' : 'public'

const configBase = {
  common: require('./config/common'),
  development: require('./config/development'),
  test: require('./config/test'),
  staging: require('./config/staging'),
  production: require('./config/production')
}

const config = Object.assign({}, configBase.common, configBase[ENV])

module.exports = {
  mode: isProd ? 'production' : 'development',
  devtool: 'source-map',
  entry: ['./src/index.js'],
  output: {
    filename: 'js/[name].[hash].js',
    publicPath: '/',
    path: path.resolve(__dirname, output)
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new htmlPlugin({ template: 'src/index.html' }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV),
      'process.env.CONFIG': JSON.stringify(config)
    }),
    new webpack.HotModuleReplacementPlugin(),
    new GenerateSW()
  ].concat(
    isProd
      ? [
          new CopyWebpackPlugin([
            { from: '**/(!README)*', to: '.', context: 'public' }
          ]),
          new CompressionPlugin({
            test: /\.js(\?.*)?$/i
          })
        ]
      : []
  ),
  resolve: {
    extensions: ['.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'img/[hash].[ext]',
              fallback: 'file-loader'
            }
          }
        ]
      }
    ]
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    host: '0.0.0.0',
    open: true,
    historyApiFallback: true,
    useLocalIp: true,
    hot: true
  }
}
