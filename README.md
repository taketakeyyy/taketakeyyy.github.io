# For Devs

## 環境構築

* node.js 10.16.0 LTS をインストールする

* `npm ci`をする。

## ブランチの運用
`publish`ブランチが公開用。`/docs`をGitHub Pagesのルートディレクトリにしている。

`develop`ブランチが開発用。

`publish`ブランチは`develop`ブランチからのプルリクエストをマージする。

`publish`ブランチは`/docs`ディレクトリ以下のファイルしかマージしないように`.gitignore`と`.gitattributes`で制御しているので、開発用のソースファイルはマージしない。


## 方針

webpackでコンパイルされるファイルは以下。それ以外のファイルは直編集とする。

* tsファイル
* sassファイル

## 展望
React使う
