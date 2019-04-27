const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const srcPath = subPath => path.join(__dirname, '../src', subPath);
const publicDir = path.join(__dirname, '..', '/public');

module.exports = {
    context: path.resolve('./src'),
    entry: {
        main: './index.tsx',
        hackathon: './Hackathon/index.tsx',
    },
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
            Hackathon: srcPath('Hackathon'),
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
};