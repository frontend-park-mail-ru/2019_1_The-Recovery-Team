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
            '/': 'http://104.248.28.45',
        }
    },
});
