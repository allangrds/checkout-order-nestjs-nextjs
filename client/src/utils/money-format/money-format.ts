export const moneyFormat = (value: number) => {
  const newNumber = value / 100
  const result = newNumber.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return result
}
