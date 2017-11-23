const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, "public"),
        filename: 'build.js'
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 8888
    },
    module: {
        loaders: [
            {test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader'
            },
            {test: /\.css$/,
            use: ['css-loader'],
            // use: ExtractTextPlugin.extract(['css'])
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    devtool: "source-map",
    plugins: [
        new ExtractTextPlugin('app.css')
    ]
}
