const { WebSocketServer } = require('ws')
const wss = new WebSocketServer({ port: 8080 })

wss.on('connection', (socket) => {
  console.log('Cliente conectado')
  socket.on('message', (data) => {
    // reenvía a todos los clientes
    wss.clients.forEach((c) => c.readyState === 1 && c.send(data.toString()))
  })
})

console.log('WebSocket escuchando en ws://localhost:8080')