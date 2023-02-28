export const isValidCreditCardExpirationAt = (value: string) => {
  if (value.length !== 5 || value[2] !== '/') {
    return false
  }

  const month = parseInt(value.slice(0, 2), 10)
  const year = parseInt(value.slice(3), 10)
  const currentYear = new Date().getFullYear() % 100
  const currentMonth = new Date().getMonth() + 1

  return (
    month >= 1 &&
    month <= 12 &&
    year >= currentYear &&
    month >= currentMonth
  )
}
