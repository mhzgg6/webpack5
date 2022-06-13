const { resolve } = require('path')
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  //  相对路径
  entry: './src/main.js',
  output: {
    //  入口文件打包输出文件名
    filename: 'js/main.js',
    //  __dirname 代表当前文件目录的绝对路径
    // path: resolve(__dirname, '../dist'),
    // 开发模式没有输出
    path: undefined,
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          },
          {
            test: /\.(png|jpe?g|gif|webp|svg)$/,
            type: 'asset',
            parser: {
              // dataUrlCondition: {
              //   //  小于 10 kb 的图片转 base64
              //   //  优点： 减少请求数量   缺点： 体积会更大
              //   maxSize: 100000000 * 1024 
              // }
            },
            //  将资源发送到指定目录
            generator: {
              filename: 'images/[hash:10][ext][query]'
            }
          },
          //  处理字体图标和其他资源
          {
            test: /\.(ttf|woff2?|map3|map4|avi)$/,
            type: "asset/resource",
            generator: {
              //  输出名称
              filename: 'iconfont/[hash:10][ext][query]'
            }
          },
          {
            test: /\.js$/,
            exclude: /node_modules/, // 排除 node_modules 中的 js 文件
            loader: 'babel-loader'
            //  通常在 根目录配置 babel.config.js
            // options: {
            //   presets: ['@babel/preset-env']
            // }
            
          }
        ]
      }
    ]
  },
  plugins: [
    new ESLintPlugin({
      context: resolve(__dirname, '../src')
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "../public/index.html")
    })
  ],
  devServer: {
    host: "localhost", // 启动服务器域名
    port: "3000", // 启动服务器端口号
    open: true,  //  是否自动打开浏览器
    hot: true
  },
  devtool: "cheap-module-source-map"
}