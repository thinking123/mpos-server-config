/*eslint-disable */
const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack')

// const res
// 'webpack-hot-middleware/client', 'webpack/hot/dev-server'

const config = {
    context: path.resolve(__dirname, "../"),
    entry: {
        main: ['webpack-hot-middleware/client','./src/action.js']
    },
    resolve: {
        alias: {
            'cre': path.resolve(__dirname, '../src/modules/crePosMonitorServer'),
            'src': path.resolve(__dirname, '../src')
        },
        extensions: [".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: /src/,
                // use: [{
                //     loader: 'babel-loader'
                // }]
                loader: 'babel-loader'
            },
            {
                enforce: "pre",
                test: /\.jsx?$/,
                include: /src/,
                loader: "eslint-loader"
            },
            {
                test: /\.(le|c)ss$/,
                include: /src/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            module: true,
                            importLoaders: 1,
                            camelCase: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    },
                    {
                        loader: "postcss-loader"
                    },
                    {
                        loader: "less-loader",
                        options: {
                            // sourceMap: true
                        }
                    }
                ]
            },
            {
                //for parse ant design lib css and less files
                test: /\.(le|c)ss$/,
                include: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            // module: true,
                            // importLoaders: 1,
                            // camelCase: true,
                            // localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            // sourceMap: true
                        }
                    },
                    {
                        loader: "less-loader",
                        options: {
                            // sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, '../devDist'),
        filename: 'bundle.js',
        publicPath:'/'
    },
    devtool: 'eval',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ]
}

module.exports = config
