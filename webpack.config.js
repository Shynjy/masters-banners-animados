const path = require('path')
const htmlWebpack = require('html-webpack-plugin')
const miniCssExtract = require('mini-css-extract-plugin')
const loader = require('sass-loader')

module.exports = {
    entry: './300x250-animado/scripts.js',
    output: {
        filename: 'scripts.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    miniCssExtract.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    'css-loader',
                    'style-loader' 
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images'
                }
            }
        ]
    },
    plugins: [
        new htmlWebpack({
            filename: 'index.html',
            template: './300x250-animado/index.html'
        }),
        new miniCssExtract({
            filename: 'style.css'
        })
    ]
}