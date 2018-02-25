const path = require('path')

module.exports = {
    entry: {
        main: '../src/app.js'
    },
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: '[name]-bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}