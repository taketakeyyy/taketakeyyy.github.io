const WebpackMerge = require('webpack-merge');
const common = require('./webpack.common.js'); // 汎用設定をインポート

// common設定とマージする
module.exports = WebpackMerge(common, {
    mode: 'development', // 開発モード
    devtool: 'inline-source-map', // 開発用ソースマップ
    optimization: {
        minimize: false  // 出力JSファイルを圧縮しない
    }
})