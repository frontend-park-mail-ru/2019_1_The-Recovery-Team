const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const WorkboxPlugin = require('workbox-webpack-plugin');

const srcPath = subPath => path.join(__dirname, '../src', subPath);
const publicDir = path.join(__dirname, '..', '/public');

module.exports = {
    context: path.resolve('./src'),
    entry: './index.tsx',
    output: {
        path: publicDir,
        publicPath: '/',
        filename: 'static/js/[name].[hash].js',
        chunkFilename: 'static/js/[id].[hash].chunk.js'
    },
    resolve: {
        extensions:  ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css', '.html'],
        alias: {
            libs: srcPath('libs'),
            config: srcPath('config'),
            utils: srcPath('utils'),
            components: srcPath('components'),
            styles: srcPath('styles'),
            store: srcPath('store'),
            game: srcPath('game'),
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
            },
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            sourceMap: false,
                            localIdentName: '[local][hash:base64:10]',
                        }
                    },
                    {
                        loader: 'resolve-url-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer({ browsers: ['Safari >= 8', 'last 2 versions'] })]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            outputStyle: 'expanded',
                            sourceMap: false,
                            includePaths: ["../"]
                        }
                    },
                ],
                sideEffects: true
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico|mp3)$/,
                use: {
                    loader: 'file-loader',
                    query: {
                        name: 'static/images/[name].[hash].[ext]'
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: require('html-webpack-template'),
            title: 'Frontend Game',
            appMountId: 'root',
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width,initial-scale=1'
                },
            ],
            lang: 'ru',
        }),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name]-[hash].css'
        }),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
            importsDirectory: `${publicDir}/static/js`,
            navigateFallback: '/index.html',
            runtimeCaching: [
                {
                    urlPattern: new RegExp('^https://fonts.(?:googleapis|gstatic).com/(.*)'),
                    handler: 'cacheFirst'
                },
                {
                    urlPattern: /.*/,
                    handler: 'networkFirst'
                }
            ]
        }),
    ]
};