// const path = require('path');
const config = require('./chunks.json');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

const path = require('path');
function recursiveIssuer(m) {
    if (m.issuer) {
        return recursiveIssuer(m.issuer);
    } else if (m.name) {
        return m.name;
    } else {
        return false;
    }
}

const entryPoints = {
    ProjectTile: './react/ProjectTile.jsx',
    AboutContainer: './react/AboutContainer.jsx',
    Resume: './react/Resume.jsx'
}

config.scss.forEach(entry => {
    entryPoints[entry.name] = entry.path;
});

const cacheGroups = {}

config.scss.forEach(entryPoint => {
    cacheGroups[entryPoint.name] = {
        name: entryPoint.name,
        test: (m, c, entry = entryPoint.name) => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
        chunks: 'all',
        enforce: true
    }
});

module.exports = {
    entry: entryPoints,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
            },
            {
                test: /\.(sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    { loader: 'css-loader' },
                    // { loader: 'postcss-loader' },
                    { loader: 'sass-loader' },
                ]
            },
        ]
    },
    optimization: {
        splitChunks: { cacheGroups: cacheGroups }
    },
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'js/react')
    },
    plugins: [
        new FixStyleOnlyEntriesPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "../../css/[name].css",
            chunkFilename: "../../css/[name].css"
        }),
    ],
}