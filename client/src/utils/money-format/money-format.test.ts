import { moneyFormat } from './money-format'

describe('moneyFormat', () => {
  it('should format 100 as "$1.00"', () => {
    expect(moneyFormat(100)).toBe('$1.00')
  })

  it('should format 1234 as "$12.34"', () => {
    expect(moneyFormat(1234)).toBe('$12.34')
  })

  it('should format 123456 as "$1,234.56"', () => {
    expect(moneyFormat(123456)).toBe('$1,234.56')
  })

  it('should format 99999999 as "$999,999.99"', () => {
    expect(moneyFormat(99999999)).toBe('$999,999.99')
  })
})
