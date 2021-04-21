import { Receipt } from './types'

export function isValidArrayOfReceipts (x: unknown): x is Receipt[] {
  if (!Array.isArray(x)) { return false }

  return x.every(isValidReceipt)
}

export function isValidReceipt (x: unknown): x is Receipt {
  if (typeof x !== 'object' || x === null) { return false }

  if (!('receiptNumber' in x)) { return false }

  return true
}
