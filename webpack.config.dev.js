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
    // Use externals to exclude libraries
    externals: ['react'],
    output: {
        path: __dirname + '/react-basic-items-pagination/dist',
        publicPath: '/',
        filename: 'react-basic-items-pagination.dev.js',
        libraryTarget: 'commonjs2'
    }
};
