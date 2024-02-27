## 環境構築

### tsc を vscode へ認識させる

1. npm install -g typescript
2. tsc --version でバージョンを確認

### プロジェクトの作成

- npm init でプロジェクトを作成する。tsc --init で tscconfig.json を作成する。

### プロジェクトの実行

npm run watch

### 個別ファイルの実行

1. コンパイル

- tsc hoge.ts

2. 実行ファイルを実行

- node hoge.js

### メモ

ctrl + shift + b で watch を選ぶことでコードに保存があればコンパイルを自動でしてくれる。
