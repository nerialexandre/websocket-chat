import { server } from './http'
import './websocket/websocketService'

server.listen(3333, () => console.log('🚀 Server is running in port 3333'))
