# For Devs

## 環境構築

* node.js 10.16.0 LTS をインストールする

* `npm ci`をする。

## ブランチの運用
`publish` ブランチが公開用。`/docs` をGitHub Pagesのルートディレクトリにしている。

`develop` ブランチが開発用。

`publish` ブランチは `develop` ブランチからのプルリクエストをマージする。

`publish` ブランチは `/docs` ディレクトリ以下のファイルしかマージしないように `.gitignore` と `.gitattributes` で制御しているので、開発用のソースファイルはマージしない。


## 方針

* 基本的にwebpackを使って `src` フォルダ以下のファイルを `docs` 以下にトランスパイルする。
  - 【メリット】開発時に意識するのは `src` フォルダのみでよい
  - 【デメリット】なんでもJavaScriptで実行可能な形式に変換する<del>のがキモい。</del>のでコンパイルが重くなる

## 展望
React使う
