import * as React from 'react'

import { useRouter } from 'next/router'
import { Controller } from 'react-hook-form'

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

  React.useEffect(() => {
    if (!cartItems.length) {
      router.push('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleOnGoBack = () => router.back()
  const handleOnSubmit = (data: OrdersRequest) => {
    const payload = {
      ...data,
      credit_card_number: data.credit_card_number.replace(/\s/g, ''),
      credit_card_expiration_at: data.credit_card_expiration_at.replace(
        /\//g,
        ''
      ),
      items: cartItems.map((item) => ({
        id: item.id,
        quantity: item.quantity,
      })),
    }

    createOrder(payload)
      .then(() => {
        router.replace(`/checkout/success`)
        clearCart()
      })
      .catch((err) => {
        console.log(err)
      })
  }

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
          Go back
        </Button>
        {error ? <p>{error}</p> : undefined}
        <S.Form onSubmit={handleSubmit(handleOnSubmit)}>
          <S.Section>
            <Controller
              control={control}
              name="credit_card_number"
              render={({
                field: { onBlur, onChange, ref, value },
                fieldState: { error: cardNumberError },
              }) => (
                <InputMask
                  mask="9999 9999 9999 9999"
                  alwaysShowMask={false}
                  maskPlaceholder=""
                  type="text"
                  placeholder="Card number"
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
              placeholder="Card holder name"
              error={errors.credit_card_holder_name?.message}
              {...register('credit_card_holder_name')}
            />
            <Controller
              control={control}
              name="credit_card_cvv"
              render={({
                field: { onBlur, onChange, ref, value },
                fieldState: { error: cardCvvError },
              }) => (
                <InputMask
                  mask="999"
                  alwaysShowMask={false}
                  maskPlaceholder=""
                  type="text"
                  placeholder="CVV"
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
              name="credit_card_expiration_at"
              render={({
                field: { onBlur, onChange, ref, value },
                fieldState: { error: cardExpirationAtError },
              }) => (
                <InputMask
                  mask="99/99"
                  alwaysShowMask={false}
                  maskPlaceholder=""
                  type="text"
                  placeholder="Expiration at"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  ref={ref}
                  error={cardExpirationAtError?.message}
                />
              )}
            />
          </S.Section>
          <Button
            colorScheme="green"
            variant="solid"
            fullWidth
            type="submit"
            disabled={loadingCreateOrder}
          >
            Pay it!
          </Button>
        </S.Form>
      </S.Content>
    </Container>
  )
}

export default Checkout
