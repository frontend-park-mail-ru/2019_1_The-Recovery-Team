const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const webpackPlugins = require('./webpack.plugins');

const isMain = process.env.ENTRY === 'main';

const pluginsConfig = isMain
    ? webpackPlugins.pluginConfigs.main
    : {
        ...webpackPlugins.pluginConfigs.hackathon,
    };

module.exports = webpackMerge(commonConfig, {
    mode: 'development',
    devtool: 'eval-source-map',
    plugins: webpackPlugins.devPlugins(pluginsConfig),

    devServer: {
        publicPath: '/',
        host: '0.0.0.0',
        port: isMain ? 5000 : 9000,
        historyApiFallback: isMain ? true : {
            rewrites: [
                { from: /^\/$/, to: '/hackathon/index.html' },
            ]
        },
        compress: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            '/api/v1/chat.ws': {
                target: 'ws://127.0.0.1:8082',
                ws: true,
            },
            '/api/v1/game.ws': {
                target: 'ws://127.0.0.1:8081',
                ws: true,
            },
            '/api/v1': 'http://127.0.0.1:8080',
            '/upload': 'http://127.0.0.1:8080',
        }
    },
});
