const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const manifestPlugin = new ManifestPlugin({
    fileName: 'manifest.json',
    stripSrc: /.*/,
    writeToFileEmit: true,
    seed: {
        name: 'Sad Islands',
        short_name: 'Islands',
        lang: 'ru-RU',
        start_url: '/',
        display: 'fullscreen',
        orientation: 'portrait',
        prefer_related_applications: false,
        icons: [
            {
                src: '/icon.png',
                type: 'image/png',
                sizes: '1000x1000'
            }
        ]
    }
});

const getEntry = ({ chunks, filename, title }) =>
    new HtmlWebpackPlugin({
        title,
        filename,
        chunks,
        template: 'index.ejs',
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
        manifestPlugin,
        getEntry(mainPluginsConfig),
        getEntry(hackathonPluginsConfig),
        CSSPlugin,
        new WorkboxPlugin.GenerateSW({
            importsDirectory: `${publicDir}/static/js`,
            navigateFallback: '/index.html',
            navigateFallbackBlacklist: [/^\/api/, /^\/service-worker.js/],
            runtimeCaching: [
                {
                    urlPattern: new RegExp('^https://fonts.(?:googleapis|gstatic).com/(.*)'),
                    handler: 'CacheFirst',
                },
                {
                    urlPattern: /.*/,
                    handler: 'NetworkFirst',
                }
            ]
        }),
    ],
    devPlugins: ({ chunks, filename, title }) => [
        manifestPlugin,
        getEntry({ chunks, filename, title }),
        CSSPlugin,
    ]
};
