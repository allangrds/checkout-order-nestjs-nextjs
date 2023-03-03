import { isValidCreditCardExpirationAt } from './is-valid-credit-card-expiration-at'

describe('isValidCreditCardExpirationAt', () => {
  it('should return "false" when value is not in the format MM/YY', () => {
    expect(isValidCreditCardExpirationAt('1234')).toBe(false)
    expect(isValidCreditCardExpirationAt('MM/YY')).toBe(false)
    expect(isValidCreditCardExpirationAt('13/23')).toBe(false)
    expect(isValidCreditCardExpirationAt('12/2')).toBe(false)
    expect(isValidCreditCardExpirationAt('12/222')).toBe(false)
  })

  it('should return "false" when month is not between 1 and 12', () => {
    expect(isValidCreditCardExpirationAt('00/23')).toBe(false)
    expect(isValidCreditCardExpirationAt('13/23')).toBe(false)
  })

  it('should return "false" when year is less than current year', () => {
    const oldYear = (new Date().getFullYear() % 100) - 1
    expect(isValidCreditCardExpirationAt(`01/${oldYear}`)).toBe(false)
  })

  it('should return "false" when month is less than current month', () => {
    const year = new Date().getFullYear() % 100
    const month = new Date().getMonth()
    const oldMonth = month === 0 ? 12 : month - 1

    expect(isValidCreditCardExpirationAt(`${oldMonth}/${year}`)).toBe(false)
  })

  it('should return "true" when year is greather than current year', () => {
    const year = (new Date().getFullYear() % 100) + 1

    expect(isValidCreditCardExpirationAt(`01/${year}`)).toBe(true)
  })

  it('should return "true" when month is greather than current month', () => {
    const year = new Date().getFullYear() % 100
    const month = new Date().getMonth() + 1

    expect(isValidCreditCardExpirationAt(`${month}/${year}`)).toBe(false)
  })

  it('should return "true" when month and year is greather than current month and year', () => {
    const year = (new Date().getFullYear() % 100) + 1
    const month = new Date().getMonth() + 1

    expect(isValidCreditCardExpirationAt(`${month}/${year}`)).toBe(false)
  })
})
