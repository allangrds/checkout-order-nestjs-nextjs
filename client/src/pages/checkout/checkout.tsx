import * as React from 'react'

import { useRouter } from 'next/router'
import { Controller } from 'react-hook-form'

import MaskedInput from 'react-input-mask'

import { Button, Container, Input, InputMask } from '@/components'
import { useCart } from '@/hooks'

import * as S from './checkout.styles'
import { useForm } from './checkout.hooks'

export const Checkout = () => {
  const { items: cartItems } = useCart()
  const router = useRouter()
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm()

  React.useEffect(() => {
    if (!cartItems.length) {
      router.push('/')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleOnGoBack = () => router.back()
  const handleOnSubmit = (data: any) => console.log(data)

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
        <S.Form onSubmit={handleSubmit(handleOnSubmit)}>
          <S.Section>
            <Controller
              control={control}
              name="card_number"
              render={({
                field: { onChange, onBlur, value, ref },
                fieldState: { error },
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
                  error={error?.message}
                />
              )}
            />
            <Input
              type="text"
              placeholder="Holder name"
              error={errors.card_holder_name?.message}
              {...register("card_holder_name")}
            />
            <Controller
              control={control}
              name="card_cvv"
              render={({
                field: { onChange, onBlur, value, ref },
                fieldState: { error },
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
                  error={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="card_expiration_at"
              render={({
                field: { onChange, onBlur, value, ref },
                fieldState: { error },
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
                  error={error?.message}
                />
              )}
            />
          </S.Section>
          <Button colorScheme="green" variant="solid" fullWidth type="submit">
            Pay it
          </Button>
        </S.Form>
      </S.Content>
    </Container>
  )
}
