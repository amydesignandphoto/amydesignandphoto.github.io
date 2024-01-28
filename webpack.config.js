const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const fs = require("fs");

if (!fs.existsSync("./public")) {
    fs.mkdirSync("./public");
}

require("./src/generate-pages");
const react = {
    mode: "production",
    target: "web",
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "index.js",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: "assets", to: "assets" }],
        }),
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
};

module.exports = [react];
