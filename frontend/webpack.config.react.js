let webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode : 'development',
    entry :{
        react : ['react','react-dom'],
    },
    output : {
        filename : '_dll_[name].js', //产生的文件名
        path : path.resolve(__dirname,'dist'),
        library : '_dll_[name]',
        // libraryTarget : 'var'
    },
    optimization : {
        minimizer :[
            //压缩js文件
            new UglifyJsPlugin({
                cache : true,
                parallel : true,
                sourceMap :true,
            }),
        ]
      },
    plugins : [
        new webpack.DllPlugin({
            name : '_dll_[name]',
            path : path.resolve(__dirname,'dist','manifest.json')
        }),
        
    ]
}