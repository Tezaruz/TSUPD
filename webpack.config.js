/**
 * Created by Данила on 12.01.2016.
 */

var path=require('path');
var webpack = require('webpack');


module.exports={
    context: path.join(__dirname, '/app'),
    entry: './index.js',
    output: {
        path: path.join(__dirname, '/prod'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            { test: /\.css$/,  loader: "style-loader!css-loader"},

            //[bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
            { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }
            ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};