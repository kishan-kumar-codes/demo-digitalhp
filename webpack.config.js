const path = require('path');

module.exports = {
    entry: './src/widget-entry.tsx',
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'widget-builder.[contenthash].js', // Main bundle
        //publicPath: '/dist/', // Might need to set this if the widget is to be loaded from a specific public URL
        library: 'WidgetBuilder',
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    mode: 'production',
};
