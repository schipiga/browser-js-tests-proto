module.exports = {
    module: {
      rules: [{
        test: /\.es6.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
                options: {
                    presets: ["es2015", "stage-0"],
                    plugins: ["transform-async-to-generator"]
                }
            }
        }]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.es6.js', '.json']
    },
    devtool: 'eval',
    target: 'node'
}
