const path = require('path');

module.exports = {
    entry: './react/ProjectTile.jsx',
    output: {
        path: path.resolve(__dirname, 'js/react'),
        filename: 'ProjectTile.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }
}