const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

const manifestConfig = require('./manifest.webpack');

const manifestPlugin  = new WebpackPwaManifest(manifestConfig);


const getEntry = ({ chunks, filename, title }) =>
    new HtmlWebpackPlugin({
        inject: false,
        template: require('html-webpack-template'),
        title,
        appMountId: 'root',
        meta: [
            {
                name: 'viewport',
                content: 'width=device-width,initial-scale=1'
            },
        ],
        lang: 'ru',
        filename,
        chunks,
    });

const CSSPlugin = new MiniCssExtractPlugin({
    filename: 'static/css/[name]-[hash].css'
});

const mainPluginsConfig = {
    chunks: ['main'],
    filename: 'index.html',
    title: 'SadIslands',
};

const hackathonPluginsConfig = {
    chunks: ['hackathon'],
    filename: 'hackathon/index.html',
    title: 'SadIslands.Hackathon',
};


// noinspection WebpackConfigHighlighting
module.exports = {
    pluginConfigs: {
        main: mainPluginsConfig,
        hackathon: hackathonPluginsConfig,
    },

    prodPlugins: ({ publicDir }) => [
        getEntry(mainPluginsConfig),
        getEntry(hackathonPluginsConfig),
        CSSPlugin,
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
            importsDirectory: `${publicDir}/static/js`,
            navigateFallback: '/index.html',
            runtimeCaching: [
                {
                    urlPattern: new RegExp('^https://fonts.(?:googleapis|gstatic).com/(.*)'),
                    handler: 'CacheFirst'
                },
                {
                    urlPattern: /.*/,
                    handler: 'NetworkFirst'
                }
            ]
        }),
        manifestPlugin,
    ],
    devPlugins: ({ chunks, filename, title }) => [
        getEntry({ chunks, filename, title }),
        CSSPlugin,
        manifestPlugin,
    ]
};
