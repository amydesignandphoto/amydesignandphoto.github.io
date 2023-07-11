const path = require('path')

const react = {
    mode: 'production',
    target: 'node',
    entry: './index.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'exe.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}

const script = {
    mode: 'production',
    target: 'node',
    entry: './src/script.ts',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
}

module.exports = [react, script]
