import { isValidCreditCardNumber } from './is-valid-credit-card-number'

describe('isValidCreditCardNumber', () => {
  it('should return "false" for a string with less than 16 digits', () => {
    expect(isValidCreditCardNumber('123456789012345')).toBe(false)
  })

  it('should return "false" for a string with more than 16 digits', () => {
    expect(isValidCreditCardNumber('12345678901234567')).toBe(false)
  })

  it('should return "false" for a string with non-digit characters', () => {
    expect(isValidCreditCardNumber('1234567A9012345B')).toBe(false)
  })

  it('should return "false" for an invalid credit card number', () => {
    expect(isValidCreditCardNumber('4111111111111112')).toBe(false)
  })

  it('should return "true" for a valid credit card number', () => {
    expect(isValidCreditCardNumber('4111111111111111')).toBe(true)
    expect(isValidCreditCardNumber('5286961525077209')).toBe(true)
    expect(isValidCreditCardNumber('5281359060814968')).toBe(true)
    expect(isValidCreditCardNumber('5217218097772525')).toBe(true)
    expect(isValidCreditCardNumber('5400988153206967')).toBe(true)
  })
})
