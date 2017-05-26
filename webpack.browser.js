var glob = require('glob');
var path = require('path');

module.exports = {
    entry: (['babel-polyfill']).concat(glob.sync('./src/*.test.es6.js')),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'tests.bundle.js'
    },
    module: {
      rules: [{
        test: /\.es6.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.es6.js', '.json']
    },
    devtool: 'eval'
}
