 module.exports = {
     entry: './index.js',
     target: 'node',
     output: {
         path: './webpack',
         filename: 'build.js'
     },
    module: {
    loaders: [
            {
               test: /\.css$/, loader: 'style-loader!css-loader'
            }
    ]
    }
 };
