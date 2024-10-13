const osc = require("osc");
const express = require("express");
const path = require("path"); // ファイルパスの操作に使用
const app = express();
const port = 3000;

// 静的ファイルの提供 (publicフォルダ内のファイルを提供)
app.use(express.static(path.join(__dirname, 'public')));

// OSCのUDP送信設定
const udpPort = new osc.UDPPort({
    localAddress: "0.0.0.0",
    localPort: 57121, // TouchDesignerがデフォルトでリッスンするポート
    remoteAddress: "127.0.0.1", // TouchDesignerが動作しているPCのIP（localhostに設定しています）
    remotePort: 57120 // TouchDesignerが受信するポート
});

// OSCポートの開通
udpPort.open();

// ブラウザからデータを受け取り、TouchDesignerに送信
app.get("/send/:value", (req, res) => {
    const value = req.params.value;
    console.log(`Received value: ${value}`);

    // OSCメッセージをTouchDesignerに送信
    udpPort.send({
        address: "/test", // TouchDesigner側で設定するアドレス
        args: [
            {
                type: "f", // フロート型のデータを送信
                value: parseFloat(value)
            }
        ]
    });

    res.send(`Sent value: ${value}`);
});

// サーバの開始
app.listen(port, "0.0.0.0", () => {
    // サーバの起動確認。自分のPCのIPアドレスに変更することを想定
    console.log(`Server is running at http://<YOUR_PC_IP_ADDRESS>:${port}`);
});
