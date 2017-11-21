const path = require('path');

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
            loader: 'babel-loader'}
        ]
    }
}
