import { Router } from 'express'
import { indexRoutes } from './index.routes'

const router = Router()

router.use(indexRoutes)

export { router }
