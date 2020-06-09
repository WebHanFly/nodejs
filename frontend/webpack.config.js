let HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let webpack = require('webpack');
let path = require('path');
module.exports = env => {
   const isProduction = env.production;
   const devMode = !isProduction;
   return{
    mode : isProduction ? 'production' : 'development',
    devtool : isProduction ? 'none' : 'eval-source-map',
    entry : isProduction  ? {
        app : './src/index.js',
        vender : './src/vendors.js'
    } : [
        'babel-polyfill',
        'react-hot-loader/patch',
        './src/index.js','./src/vendors.js'],
    output : {
        filename: 'js/[name].js',
        path : path.resolve(__dirname,'dist'),
        // publicPath : devMode ?  '' : 'dist/'
        // publicPath : '/dist/'
    },
    devServer : {
        port : 3000,
        open : true,
        contentBase : 'dist',
        hot : true,
        hotOnly : true,
        // publicPath:'/dist/'
    },
    optimization : {
        minimizer :[
            //压缩js文件
            new UglifyJsPlugin({
                cache : true,
                parallel : true,
                sourceMap :true,
            }),
            //压缩css文件
            new OptimizeCssAssetsPlugin({}),
        ]
      },
      performance : {
        hints : false
     },
    module : {
        noParse : /jquery/,
        rules : [
            {   test : /\.js$/,
                exclude : /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,   // 正则表达式，表示.css后缀的文件
                use: ['style-loader','css-loader']   // 针对css文件使用的loader，注意有先后顺序，数组项越靠后越先执行
            },
            {
               
                test: /\.scss/,
                exclude: /node_modules\.(css)/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    // 'css-loader',
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                          importLoaders: 1,
                          modules: true,
                        },
                    },
                    'postcss-loader',  //加前缀
                    'sass-loader',
                  ],
            }
        ]
    },
    plugins :[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : 'css/[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : 'css/[id].[hash].css',
            // publicPath : '/dist/'
          }),
        new webpack.DllReferencePlugin({
            //引用动态链接库，先生成的react的文件,找不到在去打包react文件。
            context: __dirname,
            manifest : path.resolve(__dirname,'dist','manifest.json'),
        }),
        new CleanWebpackPlugin({
            root: __dirname,
            cleanOnceBeforeBuildPatterns: [
                "**/*",
                '!manifest.json',
                '!_dll_react.js'
                ], //不用删除
        }),
        new HtmlWebpackPlugin({
            template : './public/index.html'
        }),
        new webpack.IgnorePlugin(/\.\/local/,/moment/)//忽略moment中一个包；
    ]

   }
    
    
}