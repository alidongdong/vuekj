// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
  },
  module: {
             // 当你import奇怪的后缀的时候webpack是看不懂的，他只认识js，所以需要一些奇怪的loader（加载器）
             // 而且这些加载器要安装，详情见底下
             rules: [
                 { test: /\.css$/, use: 'css-loader' },
                 { test: /\.ts$/, use: 'ts-loader' },
                 { test: /\.vue$/, use: 'vue-loader' },
                 { test: /\.less$/, use: 'less-loader' },
             ]
         }
}
