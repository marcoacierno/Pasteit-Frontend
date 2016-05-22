var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var failPLugin = require('webpack-fail-plugin');
var webpack = require('webpack');
var path = require('path');


var make = function(options) {
    var plugins;
    var cssLoaders;
    var entry = {
        index: './src/js/app/index.tsx',
    };

    var devServerPort = options.devServerPort || 5000;

    if (options.development) {
        entry = {
            index: [
                'webpack-dev-server/client?http://0.0.0.0:' + devServerPort,
                'webpack/hot/only-dev-server',
                './src/js/app/index.tsx',
            ],
        };

        cssLoaders = [
            'style-loader',
            'css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
            'postcss-loader',
        ];

        plugins = [
            new HtmlWebpackPlugin({
                template: './src/html/index.html',
            }),
            failPLugin,
        ];
    } else {
        cssLoaders = ExtractTextPlugin.extract([
            'style-loader',
            'css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
            'postcss-loader',
        ]);

        plugins = [
            new HtmlWebpackPlugin({
                template: './src/html/index.html',
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    keepClosingSlash: true,
                    minifyJS: true,
                    minifyCSS: true,
                    minifyURLs: true,
                },
            }),
            new ExtractTextPlugin("css/main.css", {
                allChunks: true,
            }),
            new webpack.DefinePlugin({
                "process.env": {
                    NODE_ENV: JSON.stringify("production")
                }
            }),
        ];
    }

    return {
        entry: entry,
        devtool: 'eval',
        output: {
            path: __dirname + '/dist',
            filename: 'bundle.js',
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel',
                    exclude: path.join(__dirname, '/node_modules/'),
                },
                {
                    test: /\.tsx?/,
                    loaders: ['react-hot', 'babel', 'ts'],
                    exclude: path.join(__dirname, '/node_modules/'),
                },
                {
                    test: /\.css/,
                    loaders: cssLoaders,
                },
            ],
        },
        plugins: plugins,
        resolve: {
            extensions: [
                '', '.js', '.json', '.ts', '.tsx', '.css',
            ],
        },
    };
};

module.exports = make;
