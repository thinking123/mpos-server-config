var webpack = require('webpack'),
    config = require('./webpack.hot'),
    middleware = require('webpack-dev-middleware'),
    hotMiddleware = require("webpack-hot-middleware"),
    express = require('express'),
    app = express(),
    path = require('path')



var compiler = webpack(config)



app.use(middleware(compiler, {
    publicPath:config.output.publicPath,
    // hot: true,
}))

app.use(hotMiddleware(compiler ,{
        log: console.log
    }))


app.get('*', function(req, res) {

    var htmlPath = path.join(__dirname, '../devDist','dev.html');// eslint-disable-line no-undef
    res.sendFile(htmlPath);

    console.log('path ', htmlPath)
});

app.listen(9000, () => {
    console.log('Example app listening on port 9000!')
})