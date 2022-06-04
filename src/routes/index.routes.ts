import { Router } from 'express'

const indexRoutes = Router()

indexRoutes.route('/index')

  .get((request, response) => {
    return response.json({ message: 'Hello World' })
  })

export { indexRoutes }
