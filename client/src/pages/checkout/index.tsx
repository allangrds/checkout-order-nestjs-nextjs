import * as React from 'react'

import { useRouter } from 'next/router'
import { Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { Button, Container, Input, InputMask } from '@/components'
import { useCart, useOrders } from '@/hooks'
import { useForm } from '@/hooks/pages/checkout.hooks'
import * as S from '@/styles/checkout.styles'
import { OrdersRequest } from '@/types'

const Checkout = () => {
  const { clearCart, items: cartItems } = useCart()
  const router = useRouter()
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm()
  const { createOrder, error, loading: loadingCreateOrder } = useOrders()
  const { t } = useTranslation()

  React.useEffect(() => {
    if (!cartItems.length) {
      router.push('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleOnGoBack = () => router.back()
  const handleOnSubmit = (data: OrdersRequest) =>
    createOrder(data).then(() => {
      router.replace(`/checkout/success`)
      clearCart()
    })

  if (!cartItems.length) {
    return undefined
  }

  return (
    <Container>
      <S.Content>
        <Button
          colorScheme="gray"
          variant="outline"
          onClick={handleOnGoBack}
          css={{
            alignSelf: 'flex-start !important',
          }}
        >
          { t('pages.checkout.go-back') }
        </Button>
        {loadingCreateOrder ? <p>{ t('pages.checkout.loading') }</p> : undefined}
        {error ? <p>{error}</p> : undefined}
        {!loadingCreateOrder ? (
          <S.Form onSubmit={handleSubmit(handleOnSubmit)}>
            <S.Section>
              <Controller
                control={control}
                name="card_number"
                render={({
                  field: { onBlur, onChange, ref, value },
                  fieldState: { error: cardNumberError },
                }) => (
                  <InputMask
                    mask="9999 9999 9999 9999"
                    alwaysShowMask={false}
                    maskPlaceholder=""
                    type="text"
                    placeholder={ t('pages.checkout.form.card-number') }
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    ref={ref}
                    error={cardNumberError?.message}
                  />
                )}
              />
              <Input
                type="text"
                placeholder={ t('pages.checkout.form.card-holder-name') }
                error={errors.card_holder_name?.message}
                {...register('card_holder_name')}
              />
              <Controller
                control={control}
                name="card_cvv"
                render={({
                  field: { onBlur, onChange, ref, value },
                  fieldState: { error: cardCvvError },
                }) => (
                  <InputMask
                    mask="999"
                    alwaysShowMask={false}
                    maskPlaceholder=""
                    type="text"
                    placeholder={ t('pages.checkout.form.card-cvv') }
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    ref={ref}
                    error={cardCvvError?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="card_expiration_at"
                render={({
                  field: { onBlur, onChange, ref, value },
                  fieldState: { error: cardExpirationAtError },
                }) => (
                  <InputMask
                    mask="99/99"
                    alwaysShowMask={false}
                    maskPlaceholder=""
                    type="text"
                    placeholder={ t('pages.checkout.form.card-expiration-at') }
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    ref={ref}
                    error={cardExpirationAtError?.message}
                  />
                )}
              />
            </S.Section>
            <Button colorScheme="green" variant="solid" fullWidth type="submit">
              { t('pages.checkout.pay-it') }
            </Button>
          </S.Form>
        ) : undefined}
      </S.Content>
    </Container>
  )
}

export default Checkout
