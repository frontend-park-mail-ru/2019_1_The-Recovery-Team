const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const webpackPlugins = require('./webpack.plugins');

const publicDir = path.join(__dirname, '..', '/public');

module.exports = webpackMerge(commonConfig, {
    plugins: webpackPlugins.prodPlugins({ publicDir }),
    mode: 'production',
    devtool: false,
});
