const path = require("path");
const WebpackMerge = require("webpack-merge");
const src = __dirname + "/src";
const dist = __dirname + "/dist";


module.exports = {
    entry: {  // ビルドの起点となるファイルの指定
        b64cert_to_carray: src + '/tools/b64cert_to_carray.ts',
        bincert_to_carray: src + '/tools/bincert_to_carray.ts'
    },
    output: {  // ビルド結果の出力場所
        path: path.join(dist + "/tools"),
        filename: '[name].js'  // [name]は、entryのプロパティ名
    },
    resolve: {  // モジュールとして扱いたいファイルの拡張子を指定する
        extensions:['.ts','.js']
    },
    devServer: {
        // webpack-dev-serverの公開フォルダ
        contentBase: path.join(dist)
    },
    module: {
        rules: [
            {
                // 拡張子が.tsで終わるファイルに対して、TypeScriptコンパイラを適用する
                test:/\.ts$/,
                use: {
                    loader:'ts-loader'
                }
            }
        ]
    }
}

