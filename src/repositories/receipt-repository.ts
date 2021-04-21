import { Receipt } from '../types'

const receipts: Receipt[] = []

export function all (): Receipt[] {
  return receipts
}

export function insert (receipt: Receipt): void {
  receipts.push(receipt)
}

export function insertMany (receipts: Receipt[]): void {
  receipts.forEach(insert)
}

export function where (predicate: (receipt: Receipt) => boolean): Receipt[] {
  return receipts.filter(predicate)
}
