const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CONFIG = require('../config.json');

const outputPath = path.resolve(__dirname, './dist');

module.exports = {
    mode: 'development',
    entry: {
        frontpage: './src/Entries/Frontpage.jsx',
        contact: './src/Entries/Contact.jsx',
    },
    output: {
        path: outputPath,
        filename: '[contenthash].[name].js',
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
                common: {
                    name: 'common',
                    minChunks: 2,
                    chunks: 'all',
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /.jsx$|.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            cacheDirectory: true,
                        },
                    },
                    {
                        loader: 'eslint-loader',
                        options: {
                            quiet: true,
                        },
                    },
                ],
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            Pages: path.resolve(__dirname, 'src/Pages/'),
            Components: path.resolve(__dirname, 'src/Components/'),
            Utils: path.resolve(__dirname, 'src/Utils/'),
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            CONFIG: {
                baseUri: JSON.stringify(CONFIG.baseUri),
                S3BucketUrl: JSON.stringify(CONFIG.S3BucketUrl),
                pages: JSON.stringify(CONFIG.pages),
            },
        }),
    ],
};
