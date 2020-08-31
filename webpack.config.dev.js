const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.config.common')

module.exports = merge(commonConfig, {
    mode: 'development',

    devtool: 'inline-source-map',

    devServer: {
        contentBase: path.join(__dirname, 'dist/'),
        port: 3000,
        publicPath: 'http://localhost:3000/',
        hotOnly: true,
    },
})
