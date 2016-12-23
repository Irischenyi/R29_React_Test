var webpack = require('webpack');
var path = require('path');
new webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify("production")
  }
});
module.exports = {
    entry: "./app/entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: 'style!css!sass'
        },
        {
            test: /\.css$/,
            loader: 'style!css'
        },
        {
            test: path.join(__dirname, 'app'),
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }
        ]
    }
};
