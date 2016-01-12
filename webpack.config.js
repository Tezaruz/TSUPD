/**
 * Created by Данила on 12.01.2016.
 */


module.exports={
    context: __dirname + '/app',
    entry: './index.js',
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    }
}