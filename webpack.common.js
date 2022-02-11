const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const src = __dirname + "/src";
const dist = __dirname + "/docs";


module.exports = {
    entry: {  // ビルドの起点となるファイルの指定
        "oxgame-battle": src + "/tools/oxgame-battle/ts/oxgame-battle.ts",
        "sudoku-solver": src + '/tools/sudoku-solver/ts/sudoku-solver.ts',
        "b64cert_to_carray": src + '/tools/b64cert_to_carray/ts/b64cert_to_carray.ts',
        "bincert_to_carray": src + '/tools/bincert_to_carray/ts/bincert_to_carray.ts'
    },
    output: {  // ビルド結果の出力場所
        path: path.join(dist + "/tools"),
        filename: '[name].js'  // [name]は、entryのプロパティ名
    },
    resolve: {  // モジュールとして扱いたいファイルの拡張子を指定する
        extensions:['.ts','.js','.wasm']
    },
    devServer: {
        // webpack-dev-serverの公開フォルダ
        contentBase: path.join(dist)
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            minify: false,
            chunks: ["oxgame-battle"],  // 使いたいJSのentry名を指定
            filename: dist + "/tools/oxgame-battle.html",
            template: src + "/tools/oxgame-battle/oxgame-battle.html"
        }),
        new HtmlWebpackPlugin({
            inject: true,
            minify: false,
            chunks: ["sudoku-solver"],  // 使いたいJSのentry名を指定
            filename: dist + "/tools/sudoku-solver.html",
            template: src + "/tools/sudoku-solver/sudoku-solver.html"
        }),
        new HtmlWebpackPlugin({
            inject: true,
            minify: false,
            chunks: ["b64cert_to_carray"],  // 使いたいJSのentry名を指定
            filename: dist + "/tools/b64cert_to_carray.html",
            template: src + "/tools/b64cert_to_carray/b64cert_to_carray.html"
        }),
        new HtmlWebpackPlugin({
            inject: true,
            minify: false,
            chunks: ["bincert_to_carray"],  // 使いたいJSのentry名を指定
            filename: dist + "/tools/bincert_to_carray.html",
            template: src + "/tools/bincert_to_carray/bincert_to_carray.html"
        }),
        // google-sitemap-verification用ファイル
        new HtmlWebpackPlugin({
            inject: true,
            minify: false,
            chunks: [""],  // JSを使わない場合は空にする
            filename: dist + "/tools/google159ab6b978e19d4e.html",
            template: src + "/tools/google159ab6b978e19d4e.html"
        }),
        new HtmlWebpackPlugin({
            inject: true,
            minify: false,
            chunks: [""],  // JSを使わない場合は空にする
            filename: dist + "/compile_error_face.html",
            template: src + "/compile_error_face.html"
        }),
        new HtmlWebpackPlugin({
            inject: true,
            minify: false,
            chunks: [""],  // JSを使わない場合は空にする
            filename: dist + "/index.html",
            template: src + "/index.html"
        }),
    ],
    module: {
        rules: [
            {   // 拡張子が.tsで終わるファイルに対して、TypeScriptコンパイラを適用する
                test:/\.ts$/,
                use: {
                    loader:'ts-loader'
                }
            },
            {   // 拡張子.scssに対して、sass-loader等を適用する
                test: /\.scss/,
                use: ["style-loader", "css-loader", "sass-loader"]  // 後ろから順に適用される
            },
        ]
    },
    experiments: {
        asyncWebAssembly: true,
    },
}

