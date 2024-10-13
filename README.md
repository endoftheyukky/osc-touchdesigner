# OSC TouchDesigner システム
このシステムは、ブラウザからTouchDesignerに対してOSC (Open Sound Control) を使用してデータを送信するシンプルな仕組みです。ボタンを押すたびに、押した回数がTouchDesignerに送信され、映像などの制御に使用できます。

## 機能
- ブラウザ上のボタンを押すたびに、その回数がOSCを通じてTouchDesignerに送信されます。
- 送信されるデータはボタンを押した回数です。

## 必要な環境

- [Node.js](https://nodejs.org/)（バージョン12以上）
- TouchDesigner
- npm（Node.jsに含まれています）

## 環境構築

### 1. Node.jsのインストール

まず、[Node.jsの公式サイト](https://nodejs.org/)から最新の安定版をダウンロードしてインストールしてください。インストールが完了したら、以下のコマンドで正しくインストールされているか確認します。

```bash
node -v
npm -v
```

これで、Node.jsとnpmがインストールされていることを確認できます。

### 2. プロジェクトのセットアップ

1. このリポジトリをクローンします：

   ```bash
   git clone https://github.com/username/osc-touchdesigner.git
   ```

2. プロジェクトディレクトリに移動します：

   ```bash
   cd osc-touchdesigner
   ```

### 3. 必要なパッケージのインストール

Node.jsでOSCを使うために必要なパッケージをインストールします。以下のコマンドを実行してください。

```bash
npm install osc express
```

- `osc`: OSC (Open Sound Control) プロトコルを扱うためのライブラリ
- `express`: 簡易的なWebサーバーを立てるためのフレームワーク

### 4. Node.jsサーバの起動

パッケージのインストールが完了したら、次にサーバを起動します。

```bash
node server.js
```

これで、`http://localhost:3000`でサーバが動作しており、データ送信の準備が整います。

### 5. ブラウザからデータを送信

1. `index.html`ファイルをブラウザで開きます。
2. ボタンを押すと、押した回数がサーバに送信され、さらにOSC経由でTouchDesignerに送信されます。

## TouchDesignerの設定

TouchDesignerの設定はすでに完了しているので、以下の手順で簡単に始めることができます。

1. このリポジトリのフォルダにある`osc.toe`ファイルをTouchDesignerで開きます。
2. OSC In DATがすでに設定されており、`Network Port`は`57120`に設定済みです。
3. ブラウザ上のボタンを押すと、TouchDesigner内で押された回数が受信され、確認できます。

これでシステム全体が機能するはずです。問題があれば再度サーバの状態やTouchDesignerの設定を確認してください。
