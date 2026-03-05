const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackCopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',

    entry: {
        popup: path.resolve(__dirname, 'src/popup.js'),
        background: path.resolve(__dirname, 'src/background.js')
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        clean: true,
        assetModuleFilename: "[name][ext]"
    },

    devtool: "source-map",

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)%/i,
                type: "asset/resource"
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "Calabrioadie", //Title of the extension here (popup)
            filename: "popup.html", 
            template: "src/popup.html"
        }),

        new WebpackCopyPlugin({
            patterns: [
                { from: 'manifest.json', to: '.' },
                { from: 'imgs', to: 'imgs' }
            ]
        })
    ]
}