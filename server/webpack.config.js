const path = require('path')

module.exports = {
    entry: '../web/src/App.js',
    target:'node', // node运行环境
    output: {
        libraryTarget:'umd', //编译为模块
        path: path.resolve(__dirname, 'build'),
        filename:'main.js'
        
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/preset-react'],
                    }
                }
            },
            {
                test: /\.(css|jpg|svg|png)$/,
                use: {
                    loader:'file-loader'
                }
            }
        ]
    },
};