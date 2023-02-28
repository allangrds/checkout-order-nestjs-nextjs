export const isValidCreditCardNumber = (value: string) => {
  const sanitizedValue = value.replace(/\D/g, '')

  if (sanitizedValue.length !== 16) {
    return false
  }

  const checksum = sanitizedValue.split('').reduce((acc, digit, index) => {
    const weight = parseInt(digit, 10) * (index % 2 === 0 ? 2 : 1)
    const weightedDigit = weight > 9 ? weight - 9 : weight

    return acc + weightedDigit
  }, 0)

  return checksum % 10 === 0
}
