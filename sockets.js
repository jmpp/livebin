module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('codeUpdate', (data) => {
      socket.broadcast.emit('codeUpdate', data)
    })

    socket.on('setMode', (mode) => {
      socket.broadcast.emit('setMode', mode)
    })
  })
}