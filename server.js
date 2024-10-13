const osc = require("osc");
const express = require("express");
const app = express();
const port = 3000;

// OSCのUDP送信設定
const udpPort = new osc.UDPPort({
    localAddress: "0.0.0.0",
    localPort: 57121, // TouchDesignerがデフォルトでリッスンするポート
    remoteAddress: "127.0.0.1", // TouchDesignerが動いているPCのIP（今回は同じPCなのでlocalhost）
    remotePort: 57120 // TouchDesignerが受信するポート
});

// OSCポートの開通
udpPort.open();

// ブラウザからデータを受け取り、TouchDesignerに送る
app.get("/send/:value", (req, res) => {
    const value = req.params.value;
    console.log(`Received value: ${value}`);

    // OSCメッセージを送信
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
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
