const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    entry: {
        main: [
            'react-hot-loader/patch',    
            './src/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: '[name]-bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../public'),
        port: 5000,
        hot: true,
        open: false
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: 'images/[name]-[hash:8].[ext]'
                    }
                ]
            }
        ]
    },
    devtool: 'cheap-module-eval-source-app',
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlPlugin({
            template: 'src/index.html',
            title: 'In Development',
            filename: 'index.html'
        })
    ]
}