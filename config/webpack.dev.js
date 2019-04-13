const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        publicPath: '/',
        port: 5000,
        historyApiFallback: true,
        compress: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            '/api/v1/game.ws': {
              target: 'ws://127.0.0.1:8080',
              ws: true,
            },
            '/api/v1': 'http://127.0.0.1:8080',
            '/upload': 'http://127.0.0.1:8080',
        }
    },
});
