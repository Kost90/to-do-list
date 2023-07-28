const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlWebpackPluginConfig ={
    title: "Homework 37",
    template: "index.html",
};

module.exports ={
    entry: './index.js',
    output:{
        filename: 'bundel.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [new HtmlWebpackPlugin(htmlWebpackPluginConfig)],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
      devServer:{
        static: './dist'
      }
}