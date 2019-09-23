const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =
{
    mode: 'production', // development or production
    entry: './src/js/app.js',

    output:
    {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
    },

    module:
    {
        rules:
        [
            {
                test: /\.css$/i,
                exclude: /(node_modules|bower_components)/,
                use: ['style-loader', 'css-loader'],
            },

            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                            publicPath: 'images/',
                        },
                    },
                ],
            },

            {
                test: /\.html$/,
                use: [
				{
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                    },
                }],
            },
        ],
    },

    plugins:
    [
        new HtmlWebpackPlugin(
        {
            template: 'src/index.html',
            minify: {
                removeComments: true,
                removeStyleTypeAttributes: true,
                removeScriptTypeAttributes: true,
                minifyCSS: true,
                minifyJS: true,
                collapseWhitespace: true,
                keepClosingSlash: true,
            },
        }),
    ]
};