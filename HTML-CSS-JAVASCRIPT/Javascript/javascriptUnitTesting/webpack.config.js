const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackCopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',

    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
        sum: path.resolve(__dirname, 'src/sum.js'),
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        clean: true,
        assetModuleFilename: "[name][ext]"
    },

    devtool: "eval-source-map",
    
    devServer: {
        static: path.resolve(__dirname, "dist"),
        hot: true,
        open: true,
        port: 8080,
        watchFiles: ["./src/**/*"],
    },

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
            filename: "index.html", 
            template: "src/index.html"
        }),

        new WebpackCopyPlugin({
            patterns: [
                { from: 'imgs', to: 'imgs' }
            ]
        })
    ]
}