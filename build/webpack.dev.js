const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin')


const config = {
    context: path.resolve(__dirname, "../"),
    entry: {
        main: './index.js'
    },
    module: {
        rules: [
            {
                test: '/\.jsx?$/',
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                enforce: "pre",
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name]-[hash:5].js'
    },
    devServer: {
        compress: true,
        port: 9000,
        historyApiFallback: true,
        // hot: true,
        open: true,
        index: 'index.html'
    },
    devtool: '#source-map',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'test.html',
            title: 'mypro1'
        }),
    ]
}

module.exports = config