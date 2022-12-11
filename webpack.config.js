const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        home: './src/home.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpeg|jpg|svg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test:/\.tff$/i,
                type: 'asset/resource',
            },
        ],
    },
};