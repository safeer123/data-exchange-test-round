
const WS_URL = "wss://production-esocket.delta.exchange/";

class WSController {

    sendData(symbols) {
        if(this.ws?.readyState === WebSocket.OPEN) {
            const strigifiedMsg = JSON.stringify({
                name: "v2/ticker", 
                symbols,
            });
            this.ws.send(strigifiedMsg);
        } else {
            this.pendingMsg = symbols;
        }
    }

    handleMessages(data) {
        console.log(data);
    }
    
    connect() {
        if(this.ws?.readyState === WebSocket.OPEN) {
            // already connected, ignore
            return;
        }
        this.ws = new WebSocket(WS_URL);
        // Connection opened
        this.ws.addEventListener('open', (event) => {
            console.log("Websocket connected successfully...");
            if(this.pendingMsg) {
                this.sendData(this.pendingMsg);
                this.pendingMsg = null;
            }
        });

        // Listen for messages
        this.ws.addEventListener('message', (event) => {
            this.handleMessages(event.data);
            // console.log('Message from server ', event.data);
        });
    }

    close() {
        console.log("ws closing..");
        if(this.ws) {
            this.ws.close();
            delete this.ws;
        }
    }
}

export default new WSController();