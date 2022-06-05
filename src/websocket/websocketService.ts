import { io } from '../http'

io.on('connect', (socket) => {
  socket.emit('initial_chat', {
    message: 'Welcome to the chat!'
  })
})
