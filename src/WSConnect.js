
const WS_URL = "wss://production-socket.delta.exchange";

class WSController {

    sendData(symbols) {
        if(this.ws?.readyState === WebSocket.OPEN) {
            this.ws.send({
                name: "v2/ticker", 
                symbols,
            });
        } else {
            this.pendingMsg = symbols;
        }
    }

    handleMessages(data) {
        console.log(data);
    }
    
    connect() {
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