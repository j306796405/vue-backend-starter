import { pluralize } from './pluralize'
import { timeAgo } from './timeAgo'
import { toThousand } from './toThousand'

export {
  pluralize,
  timeAgo,
  toThousand
}
export { parseTime, formatTime } from '@/utils'

/**
 * Number formatting
 * like 10000 => 10k
 * @param {number} num
 * @param {number} digits
 */
export function numberFormatter (num, digits) {
  const si = [
    { value: 1E18, symbol: 'E' },
    { value: 1E15, symbol: 'P' },
    { value: 1E12, symbol: 'T' },
    { value: 1E9, symbol: 'G' },
    { value: 1E6, symbol: 'M' },
    { value: 1E3, symbol: 'k' }
  ]
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
    }
  }
  return num.toString()
}

/**
 * Upper case first char
 * @param {String} string
 */
export function uppercaseFirst (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
