import { Router } from 'express'

import { receipts } from '../repositories'

const router = Router()

router.get('/', (req, res) => {
  const filters = req.body

  if (filters === undefined) {
    res.json(receipts.all()).end()
    return
  }

  const filteredReceipts = receipts.where((receipt: any) => {
    if (filters.country !== undefined && filters.country !== receipt?.merchant?.branch?.address?.country) { return false }
    if (filters.start_time !== undefined && filters.start_time < receipt?.receiptUnixTimeStamp) { return false }
    if (filters.end_time !== undefined && filters.end_time > receipt?.receiptUnixTimeStamp) { return false }

    return true
  })

  res.json(filteredReceipts).end()
})

export default router
