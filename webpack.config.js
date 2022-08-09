const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx', // 번들링 시작 위치
    output: {
        path: path.join(__dirname, '/dist'), // 번들 결과물 위치
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'], // 모듈 위치
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: './public/index.html',
        // }),
    ],
    devServer: {
        port: 3000
    },
    mode: 'development', // 번들링 모드 development / production
};