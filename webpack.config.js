const path = require("path")

module.exports = {
    mode: "production",
    output: {
        filename: "main.js",
        library: "asyncify",
        libraryTarget: "umd"
    },
    node: {
        fs: 'empty',
    }
}