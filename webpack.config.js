//The configuration is a javascript object. Remember to export it 
module.exports = {
entry: './client.js',
output: {
    filename: 'bundle.js',
    path: 'public'
},

module: {
    loaders: [
        {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react']
            }
        }
    ]
}

};