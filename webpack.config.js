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
<<<<<<< HEAD
                    'style-loader',
                    'css-loader'
                ]
=======
                    'css-loader',
                    'style-loader' 
                ],
>>>>>>> 7787ca1954b1b94442ec2e6654f217d087ec434b
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
<<<<<<< HEAD
=======
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images'
                }
>>>>>>> 7787ca1954b1b94442ec2e6654f217d087ec434b
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