const path = require('path');

const config = {
    module: {
        rules: [
            {
                test: /\.css?$/,
                loaders: [ 'style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' ],
                include: path.resolve(__dirname, '../client')
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                include: path.resolve(__dirname, '../client')
            }
        ],
    }
};

module.exports = config;