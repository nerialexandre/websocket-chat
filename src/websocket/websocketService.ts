import { CreateUserService } from 'src/services/createUserService'
import { GetAllUsersService } from 'src/services/getAllUsersService'
import { container } from 'tsyringe'
import { io } from '../http'

io.on('connect', socket => {
  socket.on('start', async data => {
    const createUserService = container.resolve(CreateUserService)
    data['socketId'] = socket.id
    const user = await createUserService.excute(data)

    socket.broadcast.emit('new_users', user)
  })

  socket.on('get_users', async callback => {
    const getAllUsersService = container.resolve(GetAllUsersService)
    const users = await getAllUsersService.execute()
    callback(users)
  })
})
