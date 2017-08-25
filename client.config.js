const fs = require('fs');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const entry = fs.readdirSync('./client').reduce((prev, folder) => (prev[`${folder}/${folder}`] = `./client/${folder}/index.js`) && prev, {});

const config = {
    entry,
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
					use: "css-loader"
				})
            },
            // Optionally extract less files
            // or any other compile-to-css language
            // {
            //     test: /\.less$/,
            //     loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            // },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-2']
                    }
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "[name].css",
            allChunks: true
        })
    ]
};

module.exports = config;