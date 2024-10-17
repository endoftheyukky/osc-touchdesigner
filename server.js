require('dotenv').config();
const osc = require("osc");
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.SERVER_PORT || 3000;

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

app.get('/config', (req, res) => {
    res.json({
        serverIP: process.env.SERVER_IP,
        serverPort: process.env.SERVER_PORT
    });
});

// サーバの開始
app.listen(port, "0.0.0.0", () => {
    console.log(`Server is running at http://${process.env.SERVER_IP}:${port}`);
});
