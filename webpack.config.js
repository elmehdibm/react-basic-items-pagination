const webpack = require('webpack');

module.exports = {
    entry: './index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            }
        ]
      },
    output: {
        path: __dirname + '/react-basic-items-pagination',
        publicPath: '/',
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    }
};
