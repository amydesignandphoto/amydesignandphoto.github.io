const { readFileSync, writeFile, writeFileSync } = require('fs')
const path = require('path')

const template = readFileSync('template.html').toString()
const configFile = readFileSync('./config.json').toString()
const config = JSON.parse(configFile)
config.pages.map(page => {
    const injectedTemplate = template.replace(
        '// GLOBALS',
        `const PAGE_ID = '${page.id}'; const config = ${JSON.stringify(config)};`
    )
    writeFileSync(`./docs/${page.id}.html`, injectedTemplate)
})

const react = {
    mode: 'production',
    target: 'web',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}

module.exports = [react]
