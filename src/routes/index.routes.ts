import { Router } from 'express'

const indexRoutes = Router()

indexRoutes.route('/teste')
  .get((request, response) => {
    return response.json({ message: 'Hello World' })
  })

export { indexRoutes }
