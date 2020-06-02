const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMerge = require("webpack-merge");
const src = __dirname + "/src";
const dist = __dirname + "/dist";


const baseConfig = {
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


const indexConfig = WebpackMerge(baseConfig, {
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            minify: true,
            filename: "index.html",
            template: src + "/index.html"
        }),
    ]
});

const compileErrorFaceConfig = WebpackMerge(baseConfig, {
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            minify: true,
            filename: dist + "/compile_error_face.html",
            template: src + "/compile_error_face.html"
        }),
    ]
});

const b64certToCarrayConfig = WebpackMerge(baseConfig, {
    entry: {  // ビルドの起点となるファイルの指定
        b64cert_to_carray: src + '/tools/b64cert_to_carray.ts'
    },
    output: {  // ビルド結果の出力場所
        path: path.join(dist + "/tools"),
        filename: '[name].js'  // [name]は、entryのプロパティ名
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            minify: true,
            filename: dist + "/tools/b64cert_to_carray.html",
            template: src + "/tools/b64cert_to_carray.html"
        }),
    ]
});



// module.exports = [indexConfig, compileErrorFaceConfig, b64certToCarrayConfig];