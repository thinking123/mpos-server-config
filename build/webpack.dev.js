/*eslint-disable */
const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin')

// const res

const config = {
    context: path.resolve(__dirname, "../"),
    entry: {
        main: ['./src/index.js']
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
        path: path.resolve(__dirname, '../dist'),
        filename: '[name]-[hash:5].js',
        //使用 devServer 必须设置publicPath
        publicPath: "/"
    },
    devServer: {
        compress: true,
        port: 9000,
        // hot: true,
        open: true,
        index: 'index.html',
        //http://localhost:9082/cre-pos/service/authen/login
        proxy:{
            '/cre-pos':'http://localhost:9082/cre-pos/service'
        }
        // historyApiFallback: {
        //     index: 'index.html'
        // }
    },
    devtool: '#source-map',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'test.html',
            title: 'mypro1'
        })
    ]
}

module.exports = config
