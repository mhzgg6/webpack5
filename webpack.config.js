const { resolve } = require('path')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    //  入口文件打包输出文件名
    filename: 'js/main.js',
    //  __dirname 代表当前文件目录的绝对路径
    path: resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
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
          dataUrlCondition: {
            //  小于 10 kb 的图片转 base64
            //  优点： 减少请求数量   缺点： 体积会更大
            maxSize: 10 * 1024 
          }
        },
        //  将资源发送到指定目录
        generator: {
          filename: 'images/[hash:10][ext][query]'
        }
      }
    ]
  },
  plugins: []
}