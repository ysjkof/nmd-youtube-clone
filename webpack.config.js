const path = require("path");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", 'js', 'main.js');
const OUTPUT_DIR = path.join(__dirname, 'static');

module.exports = {
  mode,
  entry: ["@babel/polyfill", ENTRY_FILE],
  output: {
    filename: '[name].js',
    path: OUTPUT_DIR
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: ['babel-loader']
      },
      {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                    {
                      //변환될 코드의 target을 의미합니다.
                      overrideBrowserslist:"cover 99.5%"
                    },
                  ],
                ],
              },
            },
          },
          'sass-loader'
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({filename: 'styles.css'}),
  ],
}