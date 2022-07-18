const webpack = require('webpack')
const path = require('path')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: [
        './client/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    devtool: 'eval-source-map',
    performance: {
        hints: false
    },
    mode: 'development',
    devServer: {
        host: 'localhost',
        port: 8080,
        hot: true,
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, 'build'),
            publicPath: '/build',
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials' : true,
            'Access-Control-Allow-Methods' :  'POST', 
        },
        proxy: {
            '/api/**': {
                target: 'http://localhost:3000/',
                secure: false,
            },
            '/assets/**': {
                target: 'http://localhost:3000/',
                secure: false,
            },
            '/auth/**': {
                target: 'http://localhost:3000/',
                secure: false,
            },
        },
    },
    module: {
        rules: [
            {
              test: /\.jsx?/, 
              exclude: path.resolve(__dirname, 'node_modules'),
              use: [
                {
                  loader: 'babel-loader', 
                  options: {
                    presets: [
                      '@babel/preset-env', 
                      '@babel/preset-react'
                    ]
                  }, 
                }, 
              ]
            },
            {
              test: /\.s[ac]ss$/i,
              use: [
                'style-loader', 
                'css-loader',
                'sass-loader' 
              ]
            },
             {
                  test: /\.(png|jp(e*)g|svg|gif)$/,
                  use: ["file-loader"]
              }
          ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './client/index.html')
        }),
        new NodePolyfillPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};