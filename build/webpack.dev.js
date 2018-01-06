/*eslint-disable */
const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin')

// const res
const config = {
    context: path.resolve(__dirname, "../"),
    entry: {
        main: './index.js'
    },
    resolve:{
        alias:{
            'cre':path.resolve(__dirname , '../src/modules/crePosMonitorServer'),
            'src':path.resolve(__dirname , '../src')
        },
        extensions: [".js", ".jsx" , ".json"]
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
                include: /src/,
                loader: "eslint-loader"
            },
            {
                test:'/\.css$/',
                exclude: /node_modules/,
                use:[
                    {
                        loader:'css-loader',
                        options: {
                            module:true,
                            importLoaders: 1,
                            camelCase:true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    },
                    {
                        loader: "post-loader"
                    }
                ]
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
