import { Router } from 'express'

import { receipts } from '../repositories'
import { isValidArrayOfReceipts, isValidReceipt } from '../validators'

const router = Router()

router.post('/', (req, res) => {
  const payload = req.body

  if (isValidArrayOfReceipts(payload)) {
    receipts.insertMany(payload)
    res.status(200).end()
    return
  }

  if (isValidReceipt(payload)) {
    receipts.insert(payload)
    res.status(200).end()
    return
  }

  res.status(422).end()
})

export default router
