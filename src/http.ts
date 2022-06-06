import express from 'express'
import { createServer } from 'http'
import mongoose from 'mongoose'
import path from 'path'
import 'reflect-metadata'
import { Server } from 'socket.io'
import { router } from './routes'
const app = express()

const server = createServer(app)

mongoose.connect('mongodb://localhost/websocket')

app.use(express.static(path.join(__dirname, '..', 'public')))

const io = new Server(server)

app.use(router)

export { server, io }
