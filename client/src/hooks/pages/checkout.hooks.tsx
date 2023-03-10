import { z as zod } from 'zod'

import { useForm as useBaseForm } from '@/hooks'
import { OrdersRequest } from '@/types'
import { isValidCreditCardExpirationAt, isValidCreditCardNumber } from '@/utils'

export const useForm = () => {
  const requiredMessage = 'This field is required'
  const formatMaxMessage = (max: number) => (
    {
      message: `This field must be at most ${max} characters`,
      meta: { max },
    }
  )
  const invalidCardNumber = 'Invalid credit card'
  const invalidExpirationAt = 'Invalid expiration date'

  const schema = zod.object({
    credit_card_number: zod
      .string({
        required_error: requiredMessage,
      })
      .trim()
      .min(19, { message: requiredMessage })
      .max(19, formatMaxMessage(19))
      .refine(isValidCreditCardNumber, invalidCardNumber),
    credit_card_holder_name: zod
      .string({
        required_error: requiredMessage,
      })
      .trim()
      .min(1, { message: requiredMessage })
      .max(50, formatMaxMessage(50) ),
    credit_card_expiration_at: zod
      .string({
        required_error: requiredMessage,
      })
      .trim()
      .min(5, { message: requiredMessage })
      .max(5, formatMaxMessage(5))
      .refine(isValidCreditCardExpirationAt, invalidExpirationAt),
    credit_card_cvv: zod
      .string({
        required_error: requiredMessage,
      })
      .trim()
      .min(3, { message: requiredMessage })
      .max(3, formatMaxMessage(3)),
  })

  const validation = useBaseForm<OrdersRequest>(schema)

  return validation
}
