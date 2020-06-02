const WebpackMerge = require('webpack-merge');
const common = require('./webpack.common.js'); // 汎用設定をインポート

// common設定とマージする
module.exports = WebpackMerge(common, {
    mode: 'production', // 本番モード
    optimization: {
        minimize: true  // 出力JSファイルを圧縮する
    }
})