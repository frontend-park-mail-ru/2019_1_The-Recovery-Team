const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const srcPath = subPath => path.join(__dirname, '../src', subPath);

module.exports = {
    context: path.resolve('./src'),
    entry: './index.tsx',
    output: {
        path: path.join(__dirname, '..', '/public'),
        publicPath: '/',
        filename: 'static/js/[name].[hash].js',
        chunkFilename: 'static/js/[id].[hash].chunk.js'
    },
    resolve: {
        extensions:  ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css', '.html'],
        alias: {
            libs: srcPath('libs'),
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
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
        })
        ,
        new MiniCssExtractPlugin({
            filename: 'static/css/[name]-[hash].css'
        }),
    ]
};