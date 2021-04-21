import express, { Router } from 'express'

import { analytics, receipts } from './routes'

const isDevelopment = (): boolean => process.env.ENVIRONMENT === 'development'

const app = express()

app.use(express.json())

app.use(
  isDevelopment() ? '/api/v1' : '/',
  Router()
    .use('/receipts', receipts)
    .use('/analytics', analytics))

app.listen(3000)
