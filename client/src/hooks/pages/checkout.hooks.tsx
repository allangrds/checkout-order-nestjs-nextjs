import { useTranslation } from 'react-i18next'
import { z as zod } from 'zod'

import { useForm as useBaseForm } from '@/hooks'
import { OrdersRequest } from '@/types'
import { isValidCreditCardExpirationAt, isValidCreditCardNumber } from '@/utils'

export const useForm = () => {
  const { t } = useTranslation()

  const requiredMessage = t('validation.required')
  const formatMaxMessage = (max: number) => ({ message: t('validation.max', { max }), meta: { max } })
  const invalidCardNumber = t('validation.invalidCardNumber')
  const invalidExpirationAt = t('validation.invalidExpirationAt')

  const schema = zod.object({
    card_number: zod
      .string({
        required_error: requiredMessage,
      })
      .trim()
      .min(19, { message: requiredMessage })
      .max(19, formatMaxMessage(19))
      .refine(isValidCreditCardNumber, invalidCardNumber),
    card_holder_name: zod
      .string({
        required_error: requiredMessage,
      })
      .trim()
      .min(1, { message: requiredMessage })
      .max(50, formatMaxMessage(50) ),
    card_expiration_at: zod
      .string({
        required_error: requiredMessage,
      })
      .trim()
      .min(5, { message: requiredMessage })
      .max(5, formatMaxMessage(5))
      .refine(isValidCreditCardExpirationAt, invalidExpirationAt),
    card_cvv: zod
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
