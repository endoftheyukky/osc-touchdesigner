# OSC TouchDesigner システム

このシステムは、ブラウザ上で時計の針を回転させることで、角度に基づいた数値データをTouchDesignerにOSC (Open Sound Control) を使って送信し、映像に変化を加えるインタラクティブシステムです。

## 機能
- ブラウザに表示された時計に針を回すと、その角度がTouchDesignerに送信されます。
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

### 自分のPCのIPアドレスを調べる
1. **Windowsの場合**:
   - コマンドプロンプトを開き、以下のコマンドを実行します:
     ```bash
     ipconfig
     ```
   - 「IPv4アドレス」という項目に表示されているのがPCのIPアドレスです。

2. **Macの場合**:
   - ターミナルを開き、以下のコマンドを実行します:
     ```bash
     ifconfig
     ```
   - `inet` に続くアドレスがPCのIPアドレスです。

### サーバーとブラウザの設定
1. `env.`の`SERVER_IP`を、調べた自分のPCのIPアドレスに置き換えます。

2. Node.jsサーバーを起動します:
   ```bash
   node server.js
   ```

3. iPadや別端末のブラウザから、**サーバが動作しているPCのIPアドレス**にアクセスします。例えば、PCのIPアドレスが`192.168.0.21`の場合、以下のURLをブラウザに入力します:
   ```
   http://192.168.0.21:3000/index.html
   ```

4. ブラウザに表示されたボタンを押すたびに、その回数が送信され、TouchDesignerに反映されます。

## TouchDesignerの使用方法

1. `osc.toe` ファイルをTouchDesignerで開きます。このファイルには、すでにOSC In CHOPなどが設定された状態のプロジェクトが含まれています。
2. TouchDesignerを起動し、`osc.toe`を開くだけで、ブラウザから送信されたデータを確認できます。
