const path = require("path")

module.exports = {
    mode: "development",
    output: {
        filename: "main.js",
        library: "asyncify",
        libraryTarget: "umd"
    },
    node: {
        fs: 'empty',
    }
}