# OSC TouchDesigner システム

このシステムは、ブラウザからTouchDesignerに対してOSC (Open Sound Control) を使用してデータを送信する簡易的な仕組みです。

## 機能
- ブラウザ上のボタンを押すたびに、押した回数がTouchDesignerにOSCを使って送信されます。
- 送信されるデータは、ボタンを押した回数です。

## 必要要件

- [Node.js](https://nodejs.org/)
- TouchDesigner（インストール済みで実行されていること）
- npm（Node.jsに付属しています）

## インストール手順

1. このリポジトリをクローンします:
   ```bash
   git clone https://github.com/username/osc-touchdesigner.git
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

2. `index.html`ファイルをブラウザで開きます（サーバを介さずに、ローカルで直接開いてください）。

3. ボタンを押すたびに、その回数がTouchDesignerに送信されます。

## TouchDesigner側の設定

1. TouchDesignerを開き、**OSC In DAT**を作成し、`Network Port`を `57120` に設定します。
2. 受信されたOSCメッセージをモニターして、送信された回数が確認できることを確認してください。
