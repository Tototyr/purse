export const socketInstance = (req) => {
    return new WebSocket(`wss://ws.coincap.io/prices?assets=${req}`);
}