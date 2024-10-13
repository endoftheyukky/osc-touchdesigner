# OSC TouchDesigner システム

このシステムは、ブラウザ上でボタンを押すことで、押した回数をTouchDesignerにOSC (Open Sound Control) を使って送信するものです。

## 機能
- ブラウザに表示されたボタンを押すたびに、その回数がTouchDesignerに送信されます。
- 送信されたデータは、OSCを使ってTouchDesignerにリアルタイムで反映されます。

## 必要要件
- [Node.js](https://nodejs.org/)
- TouchDesigner
- npm（Node.jsに付属しています）

## インストール手順

1. このリポジトリをクローンします:
   ```bash
   git clone https://github.com/endoftheyukky/osc-touchdesigner
   ```

2. プロジェクトディレクトリに移動します:
   ```bash
   cd osc-touchdesigner
   ```

3. 必要なNode.jsパッケージをインストールします:
   ```bash
   npm install
   ```

## 使用方法

1. Node.jsサーバーを起動します:
   ```bash
   node server.js
   ```

2. `index.html`ファイルをブラウザで開きます（ローカルで直接開いてください）。

3. ブラウザに表示されたボタンを押すたびに、その回数が送信され、TouchDesignerに反映されます。

## TouchDesignerの使用方法

1. `osc.toe` ファイルをTouchDesignerで開きます。このファイルには、すでにOSC In DATが設定された状態のプロジェクトが含まれています。
2. TouchDesignerを起動し、`osc.toe`を開くだけで、ブラウザから送信されたデータを確認できます。
