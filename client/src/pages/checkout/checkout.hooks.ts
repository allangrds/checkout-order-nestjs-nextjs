import { z as zod } from 'zod'

import { useForm as useBaseForm } from '@/hooks'
import { OrdersRequest } from '@/types'
import { isValidCreditCardNumber, isValidCreditCardExpirationAt } from '@/utils'

export const useForm = () => {
  const formRequiredMessage = 'This field is required'
  const formMaxMessage = 'This field has too many characters'
  const invalidCardNumber = 'Invalid credit card number'
  const invalidExpirationAt = 'Invalid date'

  const schema = zod.object({
    card_number: zod
      .string({
        required_error: formRequiredMessage,
      })
      .trim()
      .min(19, { message: formRequiredMessage })
      .max(19, { message: formMaxMessage })
      .refine(isValidCreditCardNumber, invalidCardNumber),
    card_holder_name: zod
      .string({
        required_error: formRequiredMessage,
      })
      .trim()
      .min(1, { message: formRequiredMessage })
      .max(50, { message: formMaxMessage }),
    card_expiration_at: zod
      .string({
        required_error: formRequiredMessage,
      })
      .trim()
      .min(5, { message: formRequiredMessage })
      .max(5, { message: formMaxMessage })
      .refine(isValidCreditCardExpirationAt, invalidExpirationAt),
    card_cvv: zod
      .string({
        required_error: formRequiredMessage,
      })
      .trim()
      .min(3, { message: formRequiredMessage })
      .max(3, { message: formMaxMessage }),
  })

  const validation = useBaseForm<OrdersRequest>(schema)

  return validation
}
